import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import { useColorScheme } from "nativewind";
import { View } from "react-native";

import { themes } from "@/theme/colors";

export type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({
  children,
}: ThemeProviderProps) => {
  const {
    colorScheme,
    setColorScheme,
  } = useColorScheme();

  const [theme, setThemeState] = useState<Theme>("system");

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setColorScheme(newTheme);
  };

  const resolvedTheme =
    colorScheme === "dark" ? "dark" : "light";

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <View
        style={themes[resolvedTheme]}
        className="flex-1 bg-background"
      >
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
};