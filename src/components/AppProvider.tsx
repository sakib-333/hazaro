import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { useColorScheme } from "nativewind";
import { View } from "react-native";

import i18n from "@/i18";
import { getLanguage } from "@/modules/settings/language/utils/getLanguage";
import { getTheme } from "@/modules/settings/theme/utils/getTheme";
import { themes } from "@/theme/colors";
import { ThemeMode } from "@/types/settings.types";

type ThemeContextType = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({
  children,
}: AppProviderProps) => {
  const {
    colorScheme,
    setColorScheme,
  } = useColorScheme();

  const [theme, setThemeState] = useState<ThemeMode>("system");
  useEffect(() => {
    const getInitialTheme = async () => {
      const storedTheme = await getTheme();
      const storedLanguage = await getLanguage();
      await i18n.changeLanguage(storedLanguage);
      setThemeState(storedTheme);
      setColorScheme(storedTheme);
    }

    getInitialTheme();
  }, [])

  const setTheme = (newTheme: ThemeMode) => {
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
      "useTheme must be used inside AppProvider"
    );
  }

  return context;
};
