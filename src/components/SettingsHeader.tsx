import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "./ThemeProvider";

type SettingsHeaderProps = {
    title: string;
};

const SettingsHeader = ({ title }: SettingsHeaderProps) => {
    const { theme } = useTheme();
    return (
        <SafeAreaView
            edges={["top"]}
            className="bg-background px-1"
        >
            <View className="h-14 flex-row items-center border-b border-border">
                <Pressable
                    onPress={() => router.back()}
                    className="mr-2 h-10 w-10 items-center justify-center rounded-full active:bg-surface"
                    hitSlop={8}
                >
                    <ChevronLeft
                        size={20}
                        // color={theme === "dark" ? "#ffffff" : "#000000"}
                        className="text-foreground dark:text-foreground"
                    />
                </Pressable>

                <Text className="text-xl text-foreground">
                    {title}
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SettingsHeader;