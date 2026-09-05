import BengaliLanguageIcon from "@/assets/icons/bengali-language-logo.svg";
import EnglishLanguageIcon from "@/assets/icons/english-language-logo.svg";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Check } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const languageOptions = [
    {
        value: "en" as const,
        title: "English",
        description: "Use English throughout the app",
        icon: EnglishLanguageIcon,
    },
    {
        value: "bn" as const,
        title: "Bangla",
        description: "অ্যাপটি বাংলায় ব্যবহার করুন",
        icon: BengaliLanguageIcon,
    },
];

const LanguageScreen = () => {
    const colors = useThemeColors();

    // UI only for now
    const selectedLanguage = "en";

    return (
        <SafeAreaView
            edges={["left", "right"]}
            className="flex-1 bg-background px-5"
        >
            <Text className="mt-4 text-base text-muted-foreground">
                Choose the language you want to use in Hazaro.
            </Text>

            <View className="mt-4">
                <Text className="mb-3 text-sm font-semibold text-muted-foreground">
                    Language
                </Text>

                <View className="overflow-hidden rounded-2xl border border-border bg-card">
                    {languageOptions.map((option, index) => {
                        const isSelected = selectedLanguage === option.value;
                        const Icon = option.icon;

                        return (
                            <Pressable
                                key={option.value}
                                className={`flex-row items-center px-4 py-4 active:opacity-70 ${index !== languageOptions.length - 1
                                    ? "border-b border-border"
                                    : ""
                                    }`}
                            >
                                <View className="mr-4 h-10 w-10 items-center justify-center rounded-xl bg-primary/5">
                                    <Icon width={22} height={22} color={colors.primary} />
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

export default LanguageScreen;