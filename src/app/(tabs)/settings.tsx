import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsRoute = () => {
    return (
        <SafeAreaView edges={["top", "left", "right"]} className="flex-1 px-4 bg-background">
            <View>
                <Text className="text-2xl font-bold text-primary">
                    Settings
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SettingsRoute;