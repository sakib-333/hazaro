import { FlatList, Text, TextInput, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import GameCard from "../components/GameCard";

import { demoData } from "../demo-data/demo.data";

const ViewGamesScreen = () => {
    return (
        <SafeAreaView
            edges={["top", "left", "right"]}
            className="flex-1 bg-background px-4"
        >
            <View className="mb-4">
                <Text className="text-2xl font-bold text-primary">
                    Hazaro
                </Text>

                <TextInput
                    placeholder="Search games..."
                    placeholderTextColor="#64748B"
                    className="mt-4 h-12 rounded-xl border border-border bg-surface px-4 text-base text-foreground"
                />
            </View>

            <FlatList
                data={demoData}
                renderItem={({ item }) => (
                    <GameCard
                        name={item.name}
                        createdAt={item.createdAt}
                    />
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

export default ViewGamesScreen;