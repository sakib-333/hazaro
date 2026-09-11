import BengaliLanguageIcon from "@/assets/icons/bengali-language-logo.svg";
import EnglishLanguageIcon from "@/assets/icons/english-language-logo.svg";

import { useThemeColors } from "@/hooks/useThemeColors";

import { Check } from "lucide-react-native";
import { useTranslation } from "react-i18next";

import {
    Pressable,
    Text,
    View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { updateLanguage } from "../utils/updateLanguage";

const languageOptions = [
    {
        value: "en" as const,
        titleKey: "settings.language.english.title",
        descriptionKey: "settings.language.english.description",
        icon: EnglishLanguageIcon,
    },
    {
        value: "bn" as const,
        titleKey: "settings.language.bangla.title",
        descriptionKey: "settings.language.bangla.description",
        icon: BengaliLanguageIcon,
    },
];

const LanguageScreen = () => {
    const colors = useThemeColors();

    const { t, i18n } = useTranslation();

    const selectedLanguage = i18n.language;

    const handleLanguageChange = async (
        language: "en" | "bn"
    ) => {
        await updateLanguage(language);
        await i18n.changeLanguage(language);
    };

    return (
        <SafeAreaView
            edges={["left", "right"]}
            className="flex-1 bg-background px-5"
        >
            <Text className="mt-4 text-base text-muted-foreground">
                {t("settings.language.description")}
            </Text>

            <View className="mt-4">
                <Text className="mb-3 text-sm font-semibold text-muted-foreground">
                    {t("common.language")}
                </Text>

                <View className="overflow-hidden rounded-2xl border border-border bg-card">
                    {languageOptions.map((option, index) => {
                        const isSelected =
                            selectedLanguage === option.value;

                        const Icon = option.icon;

                        return (
                            <Pressable
                                key={option.value}
                                onPress={() =>
                                    handleLanguageChange(option.value)
                                }
                                className={`flex-row items-center px-4 py-4 active:opacity-70 ${index !== languageOptions.length - 1
                                        ? "border-b border-border"
                                        : ""
                                    }`}
                            >
                                <View className="mr-4 h-10 w-10 items-center justify-center rounded-xl bg-primary/5">
                                    <Icon
                                        width={22}
                                        height={22}
                                        color={colors.primary}
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

export default LanguageScreen;