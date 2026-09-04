import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DefaultWinningScoreRoute = () => {
    return (
        <SafeAreaView edges={["top", "left", "right"]} className="flex-1 px-4 bg-background">
            <View>
                <Text className="text-2xl font-bold text-primary">
                    Default Winning Score Route
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default DefaultWinningScoreRoute;