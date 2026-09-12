
import { useThemeColors } from "@/hooks/useThemeColors";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type AppHeaderProps = {
    title: string;
    rightAction?: ReactNode;
};

const AppHeader = ({ title, rightAction }: AppHeaderProps) => {
    const colors = useThemeColors();

    return (
        <SafeAreaView
            edges={["top"]}
            className="bg-background px-2"
        >
            <View className="h-14 flex-row items-center border-b border-border">
                <Pressable
                    onPress={() => router.back()}
                    accessibilityRole="button"
                    accessibilityLabel="Go back"
                    className="mr-2 h-10 w-10 items-center justify-center rounded-full active:bg-surface"
                    hitSlop={8}
                >
                    <ArrowLeft
                        size={20}
                        color={colors.foreground}
                    />
                </Pressable>

                <Text
                    numberOfLines={1}
                    className="flex-1 text-xl text-foreground"
                >
                    {title}
                </Text>

                {rightAction}
            </View>
        </SafeAreaView>
    );
};

export default AppHeader;