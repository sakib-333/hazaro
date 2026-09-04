import { useTheme } from "@/components/ThemeProvider";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Check, Moon, Sun, SunMoon } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const themeOptions = [
    {
        value: "system" as const,
        title: "System",
        description: "Follow your device setting",
        icon: SunMoon,
    },
    {
        value: "light" as const,
        title: "Light",
        description: "Always use light mode",
        icon: Sun,
    },
    {
        value: "dark" as const,
        title: "Dark",
        description: "Always use dark mode",
        icon: Moon,
    },
];

const ThemeScreen = () => {
    const { theme, setTheme } = useTheme();
    const colors = useThemeColors();

    return (
        <SafeAreaView
            edges={["left", "right"]}
            className="flex-1 bg-background px-5"
        >
            <Text className="mt-4 text-base text-muted-foreground">
                Choose how Hazaro should look.
            </Text>

            <View className="mt-4">
                <Text className="mb-3 text-sm font-semibold text-muted-foreground">
                    Appearance
                </Text>

                <View className="overflow-hidden rounded-2xl border border-border bg-surface">
                    {themeOptions.map((option, index) => {
                        const Icon = option.icon;
                        const isSelected = theme === option.value;

                        return (
                            <Pressable
                                key={option.value}
                                onPress={() => setTheme(option.value)}
                                className={`flex-row items-center px-4 py-4 active:opacity-70 ${
                                    index !== themeOptions.length - 1
                                        ? "border-b border-border"
                                        : ""
                                }`}
                            >
                                <View className="mr-4 h-10 w-10 items-center justify-center rounded-xl bg-primary/5">
                                    <Icon
                                        size={20}
                                        color={"#2563eb"}
                                        className={
                                            isSelected
                                                ? "text-primary"
                                                : "text-muted-foreground"
                                        }
                                    />
                                </View>

                                <View className="flex-1">
                                    <Text className="text-base font-semibold text-foreground">
                                        {option.title}
                                    </Text>

                                    <Text className="mt-1 text-sm text-muted-foreground">
                                        {option.description}
                                    </Text>
                                </View>

                                {isSelected && (
                                    <View className="ml-3">
                                        <Check
                                            size={20}
                                            color={colors.primary}
                                        />
                                    </View>
                                )}
                            </Pressable>
                        );
                    })}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ThemeScreen;