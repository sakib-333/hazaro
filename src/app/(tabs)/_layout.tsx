import { Tabs } from "expo-router";
import { CirclePlus, Gamepad2, RotateCcwClock, Settings } from "lucide-react-native";

import TabBarButton from "@/components/TabBarButton";
import { useTheme } from "@/components/ThemeProvider";

const TabsLayout = () => {
    const { theme } = useTheme();

    const isDark = theme === "dark";

    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                tabBarStyle: {
                    backgroundColor: isDark ? "#020617" : "#ffffff",
                    borderTopColor: isDark ? "#020617" : "#ffffff",

                    elevation: 0,
                    shadowOpacity: 0,
                    shadowColor: "transparent",
                    borderTopWidth: 0,
                },

                tabBarActiveTintColor: "#2563eb",
                tabBarInactiveTintColor: isDark ? "#94a3b8" : "#64748b",

                tabBarShowLabel: true,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Games",

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
                    title: "Create",

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
                    title: "History",

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
                    title: "Settings",

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