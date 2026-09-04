import { Text, View } from "react-native";

const EmptyGames = () => {
    return (
        <View className="flex-1 items-center justify-center px-6 py-12">
            <View className="mb-4 h-16 w-16 items-center justify-center rounded-full bg-surface">
                <Text className="text-2xl">🃏</Text>
            </View>

            <Text className="text-center text-xl font-semibold text-foreground">
                No games found
            </Text>

            <Text className="mt-2 max-w-sm text-center text-sm leading-5 text-muted-foreground">
                We couldn't find any games matching your search.
            </Text>
        </View>
    );
};

export default EmptyGames;