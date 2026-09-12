import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyHistory from "../components/EmptyHistory";
import HistoryCard from "../components/HistoryCard";
import { historyDemoData } from "../demo-data/demo.data";

const HistoryScreen = () => {
    return (
        <SafeAreaView edges={["top", "left", "right"]} className="flex-1 px-5 bg-background">
            <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-2xl font-bold text-primary">
                    History
                </Text>
            </View>
            <FlatList
                data={historyDemoData}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <HistoryCard
                        name={item.name}
                        createdAt={item.createdAt}
                        winner={item.winner}
                        onPress={() => router.push(`/games/${item.id}`)}
                    />
                )}
                ListEmptyComponent={
                    <EmptyHistory />
                }
            />
        </SafeAreaView>
    );
};

export default HistoryScreen;