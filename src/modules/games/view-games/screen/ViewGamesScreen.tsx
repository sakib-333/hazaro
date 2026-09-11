import { useThemeColors } from "@/hooks/useThemeColors";
import { EllipsisVertical } from "lucide-react-native";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyGames from "../components/EmptyGames";
import GameCard from "../components/GameCard";
import { demoData } from "../demo-data/demo.data";

const ViewGamesScreen = () => {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const colors = useThemeColors();

    const filteredData = useMemo(() => {
        const query = searchQuery.toLowerCase();

        if (!query) {
            return demoData
        }

        return demoData.filter((item) => {
            return item.name.toLowerCase().includes(query);
        });

    }, [searchQuery]);

    return (
        <SafeAreaView
            edges={["top", "left", "right"]}
            className="flex-1 bg-background px-5"
        >
            <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-2xl font-bold text-primary">
                    Hazaro
                </Text>
                <Pressable>
                    <EllipsisVertical color={colors.mutedForeground} />
                </Pressable>
            </View>

            <FlatList
                data={filteredData}
                ListHeaderComponent={
                    <TextInput
                        placeholder={t("games.search_games")}
                        placeholderTextColor={colors.mutedForeground}
                        className="mb-4 h-12 rounded-xl border border-border bg-card px-4 text-base text-foreground"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                }
                renderItem={({ item }) => (
                    <GameCard
                        name={item.name}
                        createdAt={item.createdAt}
                    />
                )}
                ListEmptyComponent={
                    <EmptyGames />
                }
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

export default ViewGamesScreen;