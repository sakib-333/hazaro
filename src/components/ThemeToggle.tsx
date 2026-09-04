import { Moon, Sun } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { useTheme } from "./ThemeProvider";


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Pressable
      onPress={toggleTheme}
      className="flex-row items-center justify-between rounded-xl border border-border bg-surface p-4"
    >
      <View className="flex-row items-center gap-3">
        {isDark ? (
          <Moon size={20} color={"red"} />
        ) : (
          <Sun size={20} color={"red"} />
        )}

        <View>
          <Text className="text-base font-medium text-foreground">
            Appearance
          </Text>

          <Text className="mt-1 text-sm text-muted-foreground">
            {isDark ? "Dark mode" : "Light mode"}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ThemeToggle;