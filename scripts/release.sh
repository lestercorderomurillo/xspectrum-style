# bash

# colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NO_COLOR='\033[0m'

echo -e "${YELLOW}Running \"release\" script. Loading ENV variables..."

# Check if .env file exists and load environment variables
ENV_FILE=".env"

if [ -f "$ENV_FILE" ]; then
    source "$ENV_FILE"
    echo -e "${YELLOW}File \"$ENV_FILE\" loaded. Make sure it's up to date!${NO_COLOR}"
else
    echo -e "${RED}Fatal: File \"$ENV_FILE\" not found.${NO_COLOR}"
    exit 0
fi

# Check if NPM_AUTH_TOKEN is set and not empty
echo -e "${YELLOW}Step 1: ${NO_COLOR}Setting NPM package token for publish${NO_COLOR}"

if [ -z "$NPM_AUTH_TOKEN" ]; then
    echo "${RED}Fatal: NPM_AUTH_TOKEN is not set or empty${NO_COLOR}"
    exit 1
else
    echo "//registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}" > ~/.npmrc

    if [ "$NPM_AUTH_TOKEN" == "$(awk -F'=' '/_authToken/{print $2}' ~/.npmrc)" ]; then
        echo -e "${GREEN}Authentication token in ~/.npmrc matches.${NO_COLOR}"
    else
        echo -e "${RED}Fatal: Authentication token in ~/.npmrc does not match.${NO_COLOR}"
    fi
fi

# Check git status
echo -e "${YELLOW}Step 2: ${NO_COLOR}Checking if the git repository is clean.${NO_COLOR}"

if ! git diff-index --quiet HEAD --; then
    echo -e "${RED}Fatal: Git repository is not clean. Please commit or stash your changes.${NO_COLOR}"
    exit 0
else
    echo -e "${GREEN}Git repository is prepared for the release.${NO_COLOR}"
fi

# Build the project
echo -e "${YELLOW}Step 3: ${NO_COLOR}Building the project${NO_COLOR}"

if yarn build; then
    echo -e "${GREEN}Build successful.${NO_COLOR}"
else
    echo -e "${RED}Fatal: Build failed.${NO_COLOR}"
    exit 0
fi

echo -e "${YELLOW}Step 4: ${NO_COLOR}Publishing the package to the public repository"
yarn version --minor

npm publish