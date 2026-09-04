import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SettingsHeaderProps = {
    title: string;
};

const SettingsHeader = ({ title }: SettingsHeaderProps) => {
    return (
        <SafeAreaView
            edges={["top"]}
            className="bg-background"
        >
            <View className="h-14 flex-row items-center bg-surface">
                <Pressable
                    onPress={() => router.back()}
                    className="mr-3 h-10 w-10 items-center justify-center rounded-full active:bg-surface"
                    hitSlop={8}
                >
                    <ChevronLeft
                        size={20}
                        className="text-foreground"
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