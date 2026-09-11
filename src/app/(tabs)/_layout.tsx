import { Tabs } from "expo-router";
import { CirclePlus, Gamepad2, RotateCcwClock, Settings } from "lucide-react-native";

import TabBarButton from "@/components/TabBarButton";
import { useThemeColors } from "@/hooks/useThemeColors";
import { useTranslation } from "react-i18next";

const TabsLayout = () => {
    const colors = useThemeColors();
    const { t } = useTranslation();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.background,

                    elevation: 0,
                    shadowOpacity: 0,
                    shadowColor: "transparent",
                    borderTopWidth: 0,
                },

                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.mutedForeground,

                tabBarShowLabel: true,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: t("bottomTabs.games"),

                    tabBarButton: (props) => (
                        <TabBarButton {...props} />
                    ),

                    tabBarIcon: ({ color, focused }) => (
                        <Gamepad2 
                            size={24}
                            color={color}
                            strokeWidth={focused ? 2.5 : 2}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="create-game"
                options={{
                    title: t("bottomTabs.create"),

                    tabBarButton: (props) => (
                        <TabBarButton {...props} />
                    ),

                    tabBarIcon: ({ color, focused }) => (
                        <CirclePlus
                            size={24}
                            color={color}
                            strokeWidth={focused ? 2.5 : 2}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="history"
                options={{
                    title: t("bottomTabs.history"),

                    tabBarButton: (props) => (
                        <TabBarButton {...props} />
                    ),

                    tabBarIcon: ({ color, focused }) => (
                        <RotateCcwClock
                            size={24}
                            color={color}
                            strokeWidth={focused ? 2.5 : 2}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: t("bottomTabs.settings"),

                    tabBarButton: (props) => (
                        <TabBarButton {...props} />
                    ),

                    tabBarIcon: ({ color, focused }) => (
                        <Settings
                            size={24}
                            color={color}
                            strokeWidth={focused ? 2.5 : 2}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
