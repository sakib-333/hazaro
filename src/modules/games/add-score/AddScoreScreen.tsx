import AppHeader from '@/components/AppHeader';
import { useThemeColors } from '@/hooks/useThemeColors';

import {
    router,
    Stack,
    useFocusEffect,
    useLocalSearchParams,
} from 'expo-router';

import { Trash2, Wrench } from 'lucide-react-native';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { addRound } from '../services/addRound';
import { getGameById } from '../services/getGameById';
import type { Game } from '../types/game.types';

const TOTAL_ROUND_SCORE = 360;

const AddScoreScreen = () => {
    const { t } = useTranslation();
    const colors = useThemeColors();

    const { gameId } = useLocalSearchParams<{
        gameId: string;
    }>();

    const [game, setGame] = useState<Game | null>(null);

    const [scores, setScores] = useState<
        Record<string, string>
    >({});

    useFocusEffect(
        useCallback(() => {
            const loadGame = async () => {
                if (!gameId) {
                    return;
                }

                try {
                    const gameData = await getGameById(gameId);

                    if (!gameData) {
                        return;
                    }

                    setGame(gameData);

                    setScores(
                        gameData.players.reduce(
                            (result, player) => {
                                result[player.id] = '';

                                return result;
                            },
                            {} as Record<string, string>
                        )
                    );
                } catch (error) {
                    console.error(
                        'Failed to load game:',
                        error
                    );
                }
            };

            loadGame();
        }, [gameId])
    );

    const handleScoreChange = (
        playerId: string,
        value: string
    ) => {
        const numericValue = value.replace(
            /[^0-9]/g,
            ''
        );

        setScores((currentScores) => ({
            ...currentScores,
            [playerId]: numericValue,
        }));
    };

    const handleClearScore = (playerId: string) => {
        setScores((currentScores) => ({
            ...currentScores,
            [playerId]: '',
        }));
    };

    const handleCalculateScore = (
        playerId: string
    ) => {
        if (!game) {
            return;
        }

        const otherPlayersTotal = game.players.reduce(
            (total, player) => {
                if (player.id === playerId) {
                    return total;
                }

                return (
                    total +
                    Number(scores[player.id] || 0)
                );
            },
            0
        );

        const remainingScore =
            TOTAL_ROUND_SCORE - otherPlayersTotal;

        if (remainingScore < 0) {
            Alert.alert(
                'Invalid scores',
                'The other players already have a total greater than 360.'
            );

            return;
        }

        if (remainingScore % 5 !== 0) {
            Alert.alert(
                'Invalid scores',
                'The calculated score must be divisible by 5.'
            );

            return;
        }

        setScores((currentScores) => {
            const updatedScores = {
                ...currentScores,
            };

            game.players.forEach((player) => {
                if (
                    player.id !== playerId &&
                    !updatedScores[player.id]
                ) {
                    updatedScores[player.id] = '0';
                }
            });

            updatedScores[playerId] =
                String(remainingScore);

            return updatedScores;
        });
    };

    const handleDone = async () => {
        if (!game || !gameId) {
            return;
        }

        const scoreValues = game.players.map(
            (player) => ({
                playerId: player.id,
                score: Number(scores[player.id]),
            })
        );

        const hasEmptyScore = game.players.some(
            (player) =>
                scores[player.id] === undefined ||
                scores[player.id] === ''
        );

        if (hasEmptyScore) {
            Alert.alert(
                'Incomplete scores',
                'Please enter a score for every player.'
            );

            return;
        }

        const hasInvalidScore = scoreValues.some(
            ({ score }) =>
                Number.isNaN(score) ||
                score < 0 ||
                score % 5 !== 0
        );

        if (hasInvalidScore) {
            Alert.alert(
                'Invalid score',
                'Each player score must be divisible by 5.'
            );

            return;
        }

        const totalScore = scoreValues.reduce(
            (total, item) => total + item.score,
            0
        );

        if (totalScore !== TOTAL_ROUND_SCORE) {
            Alert.alert(
                'Invalid total',
                `The total score must be exactly ${TOTAL_ROUND_SCORE}. Current total is ${totalScore}.`
            );

            return;
        }

        try {
            await addRound(gameId, scoreValues);

            router.back();
        } catch (error) {
            console.error(
                'Failed to add score:',
                error
            );

            Alert.alert(
                'Something went wrong',
                'Unable to save the scores.'
            );
        }
    };

    return (
        <SafeAreaView
            edges={['left', 'right']}
            className="flex-1 bg-background"
        >
            <Stack.Screen
                options={{
                    headerShown: true,
                    header: () => (
                        <AppHeader
                            title={t(
                                'gameDetails.gameInfo.addScore'
                            )}
                        />
                    ),
                }}
            />

            <KeyboardAvoidingView
                behavior={
                    Platform.OS === 'ios'
                        ? 'padding'
                        : undefined
                }
                className="flex-1"
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerClassName="px-5 pb-8 pt-3"
                >
                    <View className="overflow-hidden rounded-[10px] border border-border bg-background">
                        {game?.players.map(
                            (player, index) => (
                                <View
                                    key={player.id}
                                    className={`min-h-[76px] flex-row items-center px-3.5 ${index <
                                        game.players
                                            .length -
                                        1
                                        ? 'border-b border-border'
                                        : ''
                                        }`}
                                >
                                    <View className="min-w-0 flex-1 py-3">
                                        <Text
                                            numberOfLines={1}
                                            className="mb-1 text-[13px] font-semibold leading-[18px] text-foreground"
                                        >
                                            {
                                                player.name
                                            }
                                            &apos;s score
                                        </Text>

                                        <TextInput
                                            value={
                                                scores[
                                                player
                                                    .id
                                                ] ?? ''
                                            }
                                            onChangeText={(
                                                value
                                            ) =>
                                                handleScoreChange(
                                                    player.id,
                                                    value
                                                )
                                            }
                                            keyboardType="number-pad"
                                            returnKeyType="done"
                                            placeholder="Tap to enter"
                                            placeholderTextColor={
                                                colors.mutedForeground
                                            }
                                            selectTextOnFocus
                                            className="h-7 p-0 text-lg leading-6 text-foreground"
                                        />
                                    </View>

                                    <View className="ml-3 flex-row items-center gap-1">
                                        <Pressable
                                            accessibilityRole="button"
                                            accessibilityLabel={`Delete ${player.name}'s score`}
                                            onPress={() =>
                                                handleClearScore(
                                                    player.id
                                                )
                                            }
                                            className="h-10 w-10 items-center justify-center rounded-full active:bg-surface"
                                        >
                                            <Trash2
                                                size={
                                                    18
                                                }
                                                color={
                                                    colors.danger
                                                }
                                            />
                                        </Pressable>

                                        <Pressable
                                            accessibilityRole="button"
                                            accessibilityLabel={`Edit ${player.name}'s score`}
                                            onPress={() =>
                                                handleCalculateScore(
                                                    player.id
                                                )
                                            }
                                            className="h-10 w-10 items-center justify-center rounded-full active:bg-surface"
                                        >
                                            <Wrench
                                                size={
                                                    18
                                                }
                                                color={
                                                    colors.foreground
                                                }
                                            />
                                        </Pressable>
                                    </View>
                                </View>
                            )
                        )}
                    </View>

                    <View className="mt-4 flex-row gap-3">
                        <Pressable
                            accessibilityRole="button"
                            className="h-[50px] flex-1 items-center justify-center rounded-[10px] border border-primary bg-background active:opacity-70"
                            onPress={() =>
                                router.back()
                            }
                        >
                            <Text className="text-[15px] font-bold text-primary">
                                Cancel
                            </Text>
                        </Pressable>

                        <Pressable
                            accessibilityRole="button"
                            onPress={handleDone}
                            className="h-[50px] flex-1 items-center justify-center rounded-[10px] bg-primary active:opacity-80"
                        >
                            <Text className="text-[15px] font-bold text-primary-foreground">
                                Done
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default AddScoreScreen;