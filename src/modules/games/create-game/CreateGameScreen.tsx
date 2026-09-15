import { useThemeColors } from '@/hooks/useThemeColors';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
    KeyboardAvoidingView,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getDefaultWinningScore } from '@/modules/settings/default-winning-score/services/getDefaultWinningScore';
import { createGame } from './services/createGame';

type CreateGameFormData = {
    name: string;
    settings: {
        winningScore: number;
    };
    players: Array<{
        name: string;
    }>;
};

const playerIndexes = [0, 1, 2, 3] as const;

const CreateGameScreen = () => {
    const { t } = useTranslation();
    const colors = useThemeColors();
    const router = useRouter();

    const {
        control,
        handleSubmit,
        resetField,
        setValue,
        formState: { errors },
    } = useForm<CreateGameFormData>({
        defaultValues: {
            name: '',
            settings: {
                winningScore: 1000,
            },
            players: playerIndexes.map(() => ({ name: '' })),
        },
    });

    useFocusEffect(
        useCallback(() => {
            const loadDefaultWinningScore = async () => {
                try {
                    const defaultWinningScore =
                        await getDefaultWinningScore();

                    setValue(
                        'settings.winningScore',
                        defaultWinningScore
                    );
                } catch (error) {
                    console.error(
                        'Failed to load default winning score:',
                        error
                    );
                }
            };

            loadDefaultWinningScore();
        }, [setValue])
    );

    const onSubmit = async (data: CreateGameFormData) => {
        try {
            const game = await createGame({
                name: data.name,
                playerNames: data.players.map(
                    (player) => player.name
                ),
                winningScore: data.settings.winningScore,
            });

            resetField('name');

            playerIndexes.forEach((index) => {
                resetField(`players.${index}.name`);
            });

            router.push({
                pathname: '/games/[gameId]',
                params: {
                    gameId: game.id,
                },
            });
        } catch (error) {
            console.error('Failed to create game:', error);
        }
    };

    return (
        <SafeAreaView
            edges={['top', 'left', 'right']}
            className="flex-1 bg-background"
        >
            <KeyboardAvoidingView
                style={styles.keyboardView}
                behavior="height"
                className="px-5 pb-8"
            >
                <View className="mb-4">
                    <Text className="text-2xl font-bold text-primary">
                        {t('game.createGame.title')}
                    </Text>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerClassName="flex-grow"
                >
                    <View className="mb-7">
                        <View className="mb-[18px]">
                            <Text className="mb-2 text-[13px] font-semibold text-foreground">
                                {t('game.createGame.gameName.label')}
                            </Text>

                            <Controller
                                control={control}
                                name="name"
                                rules={{
                                    required: t(
                                        'game.createGame.gameName.required'
                                    ),
                                    minLength: {
                                        value: 2,
                                        message: t(
                                            'game.createGame.gameName.minLength'
                                        ),
                                    },
                                }}
                                render={({
                                    field: {
                                        value,
                                        onChange,
                                        onBlur,
                                    },
                                }) => (
                                    <TextInput
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        placeholder={t(
                                            'game.createGame.gameName.placeholder'
                                        )}
                                        placeholderTextColor={
                                            colors.mutedForeground
                                        }
                                        returnKeyType="next"
                                        className={`h-[50px] rounded-[10px] border bg-background px-3.5 text-[15px] text-foreground ${errors.name
                                                ? 'border-danger'
                                                : 'border-border'
                                            }`}
                                    />
                                )}
                            />

                            {errors.name?.message && (
                                <Text className="mt-1.5 text-xs leading-4 text-danger">
                                    {errors.name.message}
                                </Text>
                            )}
                        </View>

                        <View>
                            <Text className="mb-2 text-[13px] font-semibold text-foreground">
                                {t(
                                    'game.createGame.winningScore.label'
                                )}
                            </Text>

                            <Controller
                                control={control}
                                name="settings.winningScore"
                                rules={{
                                    required: t(
                                        'game.createGame.winningScore.required'
                                    ),
                                    min: {
                                        value: 1,
                                        message: t(
                                            'game.createGame.winningScore.min'
                                        ),
                                    },
                                }}
                                render={({
                                    field: {
                                        value,
                                        onChange,
                                        onBlur,
                                    },
                                }) => (
                                    <View
                                        className={`h-[50px] flex-row items-center rounded-[10px] border bg-background ${errors.settings
                                                ?.winningScore
                                                ? 'border-danger'
                                                : 'border-border'
                                            }`}
                                    >
                                        <TextInput
                                            value={
                                                value
                                                    ? String(value)
                                                    : ''
                                            }
                                            onBlur={onBlur}
                                            onChangeText={(text) => {
                                                const numericValue =
                                                    text.replace(
                                                        /[^0-9]/g,
                                                        ''
                                                    );

                                                onChange(
                                                    numericValue
                                                        ? Number(
                                                            numericValue
                                                        )
                                                        : 0
                                                );
                                            }}
                                            keyboardType="number-pad"
                                            placeholder={t(
                                                'game.createGame.winningScore.placeholder'
                                            )}
                                            placeholderTextColor={
                                                colors.mutedForeground
                                            }
                                            returnKeyType="next"
                                            className="h-full flex-1 px-3.5 text-[15px] text-foreground"
                                        />

                                        <Text className="mr-3.5 text-[13px] font-semibold text-muted-foreground">
                                            {t(
                                                'game.createGame.winningScore.unit'
                                            )}
                                        </Text>
                                    </View>
                                )}
                            />

                            {errors.settings?.winningScore
                                ?.message && (
                                    <Text className="mt-1.5 text-xs leading-4 text-danger">
                                        {
                                            errors.settings
                                                .winningScore.message
                                        }
                                    </Text>
                                )}
                        </View>
                    </View>

                    <View className="mb-7">
                        <Text className="mb-4 text-base font-bold text-foreground">
                            {t('game.createGame.players')}
                        </Text>

                        <View className="gap-3.5">
                            {playerIndexes.map((index) => (
                                <View
                                    key={index}
                                    className="flex-row items-start"
                                >
                                    <View className="mr-2.5 mt-[9px] h-8 w-8 items-center justify-center rounded-lg bg-background">
                                        <Text className="text-xs font-bold text-muted-foreground">
                                            {index + 1}
                                        </Text>
                                    </View>

                                    <View className="flex-1">
                                        <Controller
                                            control={control}
                                            name={`players.${index}.name`}
                                            rules={{
                                                required: t(
                                                    'game.createGame.player.required',
                                                    {
                                                        number:
                                                            index +
                                                            1,
                                                    }
                                                ),
                                            }}
                                            render={({
                                                field: {
                                                    value,
                                                    onChange,
                                                    onBlur,
                                                },
                                            }) => (
                                                <TextInput
                                                    value={value}
                                                    onChangeText={
                                                        onChange
                                                    }
                                                    onBlur={onBlur}
                                                    placeholder={t(
                                                        'game.createGame.player.placeholder',
                                                        {
                                                            number:
                                                                index +
                                                                1,
                                                        }
                                                    )}
                                                    placeholderTextColor={
                                                        colors.mutedForeground
                                                    }
                                                    returnKeyType={
                                                        index ===
                                                            3
                                                            ? 'done'
                                                            : 'next'
                                                    }
                                                    className={`h-[50px] rounded-[10px] border bg-background px-3.5 text-[15px] text-foreground ${errors
                                                            .players?.[
                                                            index
                                                        ]?.name
                                                            ? 'border-danger'
                                                            : 'border-border'
                                                        }`}
                                                />
                                            )}
                                        />

                                        {errors.players?.[
                                            index
                                        ]?.name?.message && (
                                                <Text className="mt-1.5 text-xs leading-4 text-danger">
                                                    {
                                                        errors
                                                            .players[
                                                            index
                                                        ]?.name
                                                            ?.message
                                                    }
                                                </Text>
                                            )}
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    <Pressable
                        accessibilityRole="button"
                        onPress={handleSubmit(onSubmit)}
                        className="mt-0.5 h-[52px] items-center justify-center rounded-[10px] bg-primary active:opacity-80"
                    >
                        <Text className="text-[15px] font-bold text-primary-foreground">
                            {t('game.createGame.submit')}
                        </Text>
                    </Pressable>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    keyboardView: {
        flex: 1,
    },
});

export default CreateGameScreen;