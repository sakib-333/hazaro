import { Text, View } from "react-native";

const AppInfoCard = () => {
    return (
        <View className="mt-3 overflow-hidden rounded-2xl border border-border bg-card">
            <View className="flex-row items-center justify-between border-b border-border px-4 py-4">
                <Text className="text-sm text-muted-foreground">
                    Version
                </Text>

                <Text className="text-sm font-semibold text-foreground">
                    1.0.0
                </Text>
            </View>

            <View className="flex-row items-center justify-between border-b border-border px-4 py-4">
                <Text className="text-sm text-muted-foreground">
                    Developer
                </Text>

                <Text className="text-sm font-semibold text-foreground">
                    Hazaro Team
                </Text>
            </View>

            <View className="flex-row items-center justify-between px-4 py-4">
                <Text className="text-sm text-muted-foreground">
                    Release Year
                </Text>

                <Text className="text-sm font-semibold text-foreground">
                    2026
                </Text>
            </View>
        </View>
    );
};

export default AppInfoCard;