import { useMemo } from "react";
import { ThemeSchema } from "../types";
import { useColorScheme, useWindowDimensions } from "react-native";
import { media } from "../functions/transformers";

export const useTheme = (theme?: ThemeSchema) => {

  const colorScheme = useColorScheme();
  const windowDimensions = useWindowDimensions();

  const colors = useMemo(() => {
    return media(theme.colors);
  }, [colorScheme]);

  const styles = useMemo(() => {
    return media(theme.styles, theme.breakpoints);
  }, [colorScheme, windowDimensions]);

  return {
    styles,
    colors,
    sizes: theme?.sizes ?? {},
    fontSizes: theme?.fontSizes ?? {}
  };
};