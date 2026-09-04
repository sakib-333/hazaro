import ThemeToggle from "@/components/ThemeToggle";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GamesRoute = () => {
    return (
        <SafeAreaView edges={["top", "left", "right"]} className="flex-1 px-4 bg-background">
        <View>
            <Text className="text-2xl font-bold text-primary">
                Hazaro
            </Text>

            <Text className="mt-1 text-muted-foreground">
                Your recent games
            </Text>

            <View className="mt-6 rounded-2xl border border-border bg-surface p-4">
                <Text className="text-lg font-semibold text-foreground">
                    Knight Game
                </Text>

                <Text className="mt-1 text-muted-foreground">
                    4 players
                </Text>
            </View>
            <ThemeToggle />
        </View>
        </SafeAreaView>
    );
};

export default GamesRoute;