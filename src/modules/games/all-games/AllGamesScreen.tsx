import { useThemeColors } from '@/hooks/useThemeColors';

import {
    router,
    useFocusEffect,
} from 'expo-router';

import { EllipsisVertical } from 'lucide-react-native';

import {
    useCallback,
    useMemo,
    useState,
} from 'react';

import { useTranslation } from 'react-i18next';

import {
    FlatList,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { getGames } from '../services/getGames';
import type { Game } from '../types/game.types';

import EmptyGames from './components/EmptyGames';
import GameCard from './components/GameCard';

const AllGamesScreen = () => {
    const { t } = useTranslation();

    const [searchQuery, setSearchQuery] = useState('');
    const [games, setGames] = useState<Game[]>([]);

    const colors = useThemeColors();

    useFocusEffect(
        useCallback(() => {
            const loadGames = async () => {
                const storedGames = await getGames();

                setGames(storedGames);
            };

            loadGames();
        }, [])
    );

    const filteredData = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        if (!query) {
            return games;
        }

        return games.filter((item) => {
            return item.name
                .toLowerCase()
                .includes(query);
        });
    }, [games, searchQuery]);

    return (
        <SafeAreaView
            edges={['top', 'left', 'right']}
            className="flex-1 bg-background px-5"
        >
            <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-2xl font-bold text-primary">
                    Hazaro
                </Text>

                <Pressable>
                    <EllipsisVertical
                        color={colors.mutedForeground}
                    />
                </Pressable>
            </View>

            <FlatList
                data={filteredData}
                ListHeaderComponent={
                    <TextInput
                        placeholder={t(
                            'games.search_games'
                        )}
                        placeholderTextColor={
                            colors.mutedForeground
                        }
                        className="mb-4 h-12 rounded-xl border border-border bg-card px-4 text-base text-foreground"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                }
                renderItem={({ item }) => (
                    <GameCard
                        name={item.name}
                        createdAt={Number(item.createdAt ?? Date.now())}
                        onPress={() =>
                            router.push({
                                pathname: '/games/[gameId]',
                                params: {
                                    gameId: item.id,
                                },
                            })
                        }
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

export default AllGamesScreen;