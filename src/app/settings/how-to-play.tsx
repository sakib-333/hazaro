import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HowToPlayRoute = () => {
    return (
        <SafeAreaView edges={["top", "left", "right"]} className="flex-1 px-4 bg-background">
            <View>
                <Text className="text-2xl font-bold text-primary">
                    How to Play Route
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default HowToPlayRoute;