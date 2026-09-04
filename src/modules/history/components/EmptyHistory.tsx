import { History } from "lucide-react-native";
import { Text, View } from "react-native";

const EmptyHistory = () => {
    return (
        <View className="flex-1 items-center justify-center px-6 py-12">
            <View className="mb-4 h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <History size={30} className="text-primary" />
            </View>

            <Text className="text-center text-lg font-semibold text-foreground">
                No Game History
            </Text>

            <Text className="mt-2 max-w-xs text-center text-sm leading-5 text-muted-foreground">
                Completed games will appear here once you finish a game.
            </Text>
        </View>
    );
};

export default EmptyHistory;