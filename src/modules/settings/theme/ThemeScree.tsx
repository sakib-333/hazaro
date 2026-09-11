import { useTheme } from "@/components/AppProvider";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ThemeMode } from "@/types/settings.types";
import { Check, Moon, Sun, SunMoon } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import { updateTheme } from "./utils/updateTheme";


const themeOptions = [
    {
        value: "system" as const,
        titleKey: "settings.theme.options.system.title",
        descriptionKey: "settings.theme.options.system.description",
        icon: SunMoon,
    },
    {
        value: "light" as const,
        titleKey: "settings.theme.options.light.title",
        descriptionKey: "settings.theme.options.light.description",
        icon: Sun,
    },
    {
        value: "dark" as const,
        titleKey: "settings.theme.options.dark.title",
        descriptionKey: "settings.theme.options.dark.description",
        icon: Moon,
    },
];


const ThemeScreen = () => {
    const { theme, setTheme } = useTheme();
    const colors = useThemeColors();
    const { t } = useTranslation();
    
    const handleUpdateTheme = async (theme: ThemeMode) => { 
        await updateTheme(theme);
        setTheme(theme);
    
    }

    return (
        <SafeAreaView
            edges={["left", "right"]}
            className="flex-1 bg-background px-5"
        >
            <Text className="mt-4 text-base text-muted-foreground">
                {t("settings.theme.description")}
            </Text>

            <View className="mt-4">
                <Text className="mb-3 text-sm font-semibold text-muted-foreground">
                    {t("settings.theme.appearance")}
                </Text>

                <View className="overflow-hidden rounded-2xl border border-border bg-card">
                    {themeOptions.map((option, index) => {
                        const Icon = option.icon;
                        const isSelected = theme === option.value;

                        return (
                            <Pressable
                                key={option.value}
                                onPress={() => handleUpdateTheme(option.value)}
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
                                        {t(option.titleKey)}
                                    </Text>

                                    <Text className="mt-1 text-sm text-muted-foreground">
                                        {t(option.descriptionKey)}
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
