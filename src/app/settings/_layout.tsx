import SettingsHeader from "@/components/SettingsHeader";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";

const SettingsLayout = () => {
    const { t } = useTranslation();

    return (
        <Stack
            screenOptions={{
                header: ({ options }) => (
                    <SettingsHeader
                        title={options.title ?? ""}
                    />
                ),
            }}
        >
            <Stack.Screen
                name="theme"
                options={{
                    title: t("settings.screenTitles.theme"),
                }}
            />

            <Stack.Screen
                name="language"
                options={{
                    title: t("settings.screenTitles.language"),
                }}
            />

            <Stack.Screen
                name="default-winning-score"
                options={{
                    title: t("settings.screenTitles.defaultWinningScore"),
                }}
            />

            <Stack.Screen
                name="how-to-play"
                options={{
                    title: t("settings.screenTitles.howToPlay"),
                }}
            />

            <Stack.Screen
                name="about"
                options={{
                    title: t("settings.screenTitles.about"),
                }}
            />

            <Stack.Screen
                name="feedback"
                options={{
                    title: t("settings.screenTitles.feedback"),
                }}
            />

            <Stack.Screen
                name="privacy-policy"
                options={{
                    title: t("settings.screenTitles.privacyPolicy"),
                }}
            />
        </Stack>
    );
};

export default SettingsLayout;