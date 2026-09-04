import SettingsHeader from "@/components/SettingsHeader";
import { Stack } from "expo-router";

const SettingsLayout = () => {
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
                    title: "Theme",
                }}
            />

            <Stack.Screen
                name="language"
                options={{
                    title: "Language",
                }}
            />

            <Stack.Screen
                name="default-winning-score"
                options={{
                    title: "Default Winning Score",
                }}
            />

            <Stack.Screen
                name="how-to-play"
                options={{
                    title: "How to Play",
                }}
            />

            <Stack.Screen
                name="about"
                options={{
                    title: "About",
                }}
            />

            <Stack.Screen
                name="feedback"
                options={{
                    title: "Feedback",
                }}
            />

            <Stack.Screen
                name="privacy-policy"
                options={{
                    title: "Privacy Policy",
                }}
            />
        </Stack>
    );
};

export default SettingsLayout;