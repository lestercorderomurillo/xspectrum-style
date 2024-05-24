import React from "react";
import { useTheme } from "../hooks/useTheme";
import { StyledProps, StyledSchema } from "../types";
import { deepMerge } from "../utils";
import { View } from "react-native";

/*export const createStyled = <TProps extends {}>(Component: React.ComponentType<any>, schema: StyledSchema) => {
  return ({ variant, ...args }: StyledProps<TProps, {}, "primary" | "secondary">) => {
    const { styles } = useTheme(schema?.theme);
    const breakpoints = schema?.theme?.schema?.breakpoints;
    const { resolveMediaQuery } = useMediaQuery(breakpoints);

    const parse = (props) => resolveStyleProps(props, schema?.theme?.schema?.colors, schema?.theme?.schema?.sizes);

    const { props, style } = splitProps({
      props: args,
      parser: parse,
    });

    let mergedStyle = {};
    schema?.parentStyles?.forEach((parentStyleName) => {
      const currentParentStyle = parse(styles?.[parentStyleName]);
      mergedStyle = deepMerge([mergedStyle, currentParentStyle]);
    });

    const schemaStyle = parse({ ...(schema as any), variants: {} });
    const variantStyle = parse(schema?.variants?.[variant]);
    const inlineStyle = parse(args.style);

    return <Component {...props} style={resolveMediaQuery(deepMerge([mergedStyle, schemaStyle, variantStyle, style, inlineStyle]))} />;
  };
};*/




/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render. 
 * @param {StyledSchema} schema The style schema.
 * @returns A HOC wrapper around your component with extended features.
 */
export const createStyled = <TProps extends {}>(Component: React.ComponentType<any>, schema?: StyledSchema) => {

  return ({style, ...args}) => {
    const {} = useTheme(schema.theme);
    return <Component {...args} style={deepMerge([style, schema])} />
  }
};