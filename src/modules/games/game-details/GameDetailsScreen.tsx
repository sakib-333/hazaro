import AppHeader from '@/components/AppHeader';
import GameDetailsHeaderActions from '@/components/header-right-action/GameDetailsHeaderActions';
import { useThemeColors } from '@/hooks/useThemeColors';

import {
  router,
  Stack,
  useFocusEffect,
  useLocalSearchParams,
} from 'expo-router';

import { Plus, Trash2 } from 'lucide-react-native';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getGameById } from '../services/getGameById';
import type { Game } from '../types/game.types';

const getRankLabel = (position: number) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const remainder = position % 100;

  return `${position}${suffixes[
    (remainder - 20) % 10
  ] ||
    suffixes[remainder] ||
    suffixes[0]
    }`;
};

const GameDetailsScreen = () => {
  const { t } = useTranslation();
  const colors = useThemeColors();

  const { gameId } = useLocalSearchParams<{
    gameId: string;
  }>();

  const [game, setGame] = useState<Game | null>(null);

  useFocusEffect(
    useCallback(() => {
      const loadGame = async () => {
        if (!gameId) {
          return;
        }

        const gameData = await getGameById(gameId);

        setGame(gameData);
      };

      loadGame();
    }, [gameId])
  );

  const players = game
    ? game.players
      .map((player) => {
        const total = game.rounds.reduce(
          (sum, round) => {
            const playerScore =
              round.scores.find(
                (score) =>
                  score.playerId ===
                  player.id
              );

            return (
              sum +
              (playerScore?.score ?? 0)
            );
          },
          0
        );

        return {
          id: player.id,
          name: player.name,
          total,
        };
      })
      .sort((a, b) => b.total - a.total)
      .map((player, index) => ({
        ...player,
        rank: getRankLabel(index + 1),
      }))
    : [];

  const rounds = game
    ? [...game.rounds]
      .map((round, index) => ({
        id: round.id,
        number: index + 1,
        scores: game.players.map(
          (player) =>
            round.scores.find(
              (score) =>
                score.playerId ===
                player.id
            )?.score ?? 0
        ),
      }))
      .reverse()
    : [];

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
              title={game?.name ?? ''}
              rightAction={
                <GameDetailsHeaderActions
                  onEdit={() =>
                    router.push({
                      pathname:
                        '/games/[gameId]/edit',
                      params: {
                        gameId,
                      },
                    })
                  }
                  onDelete={() =>
                    console.log(
                      'Delete button pressed'
                    )
                  }
                />
              }
            />
          ),
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-7 pt-3.5"
      >
        <View className="mb-[18px]">
          <View className="mb-1.5 min-h-[38px] flex-row items-center justify-between gap-3">
            <Text className="flex-1 text-[15px] font-bold leading-5 text-foreground">
              {t(
                'gameDetails.scoreboard.title'
              )}
            </Text>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t(
                'gameDetails.actions.addScore'
              )}
              className="min-h-8 flex-row items-center gap-1.5 rounded-lg border border-border px-2 active:opacity-60"
              onPress={() =>
                router.push({
                  pathname:
                    '/games/[gameId]/add-score',
                  params: {
                    gameId,
                  },
                })
              }
            >
              <Plus
                size={16}
                color={colors.foreground}
              />

              <Text className="text-sm font-bold leading-[18px] text-foreground">
                {t(
                  'gameDetails.actions.addScore'
                )}
              </Text>
            </Pressable>
          </View>

          <View className="overflow-hidden rounded-lg border border-border">
            <View className="min-h-9 flex-row items-center border-b border-border bg-surface">
              <Text className="w-[58px] px-2 text-sm font-extrabold leading-[19px] text-muted-foreground">
                {t(
                  'gameDetails.scoreboard.rank'
                )}
              </Text>

              <Text className="min-w-20 flex-1 px-2 text-center text-sm font-extrabold leading-[19px] text-muted-foreground">
                {t(
                  'gameDetails.scoreboard.player'
                )}
              </Text>

              <Text className="w-[82px] px-2 text-right text-sm font-extrabold leading-[19px] text-muted-foreground">
                {t(
                  'gameDetails.scoreboard.score'
                )}
              </Text>
            </View>

            {players.map(
              (player, index) => (
                <View
                  key={player.id}
                  className={`min-h-[34px] flex-row items-center ${index <
                    players.length - 1
                    ? 'border-b border-border'
                    : ''
                    }`}
                >
                  <Text className="w-[58px] px-2 text-sm leading-[19px] text-foreground">
                    {player.rank}
                  </Text>

                  <Text
                    numberOfLines={1}
                    className="min-w-20 flex-1 px-2 text-center text-sm leading-[19px] text-foreground"
                  >
                    {player.name}
                  </Text>

                  <Text className="w-[82px] px-2 text-right text-sm leading-[19px] text-foreground">
                    {player.total}
                  </Text>
                </View>
              )
            )}
          </View>
        </View>

        <View className="mb-[18px]">
          <View className="mb-1.5 min-h-[38px] flex-row items-center justify-between gap-3">
            <Text className="flex-1 text-[15px] font-bold leading-5 text-foreground">
              {t(
                'gameDetails.pointTable.title'
              )}
            </Text>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t(
                'gameDetails.actions.deleteScore'
              )}
              className="min-h-8 flex-row items-center gap-1.5 rounded-lg border border-danger px-2 active:opacity-60"
            >
              <Trash2
                size={16}
                color={colors.danger}
              />

              <Text className="text-sm font-bold leading-[18px] text-danger">
                {t(
                  'gameDetails.actions.deleteScore'
                )}
              </Text>
            </Pressable>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View className="min-w-[388px] overflow-hidden rounded-lg border border-border">
              <View className="min-h-9 flex-row items-center border-b border-border bg-surface">
                <Text className="w-11 px-2 text-[13px] font-extrabold leading-[18px] text-muted-foreground">
                  {t(
                    'gameDetails.pointTable.round'
                  )}
                </Text>

                {game?.players.map(
                  (player) => (
                    <Text
                      key={
                        player.id
                      }
                      numberOfLines={
                        1
                      }
                      className="w-[86px] px-2 text-center text-[13px] font-extrabold leading-[18px] text-muted-foreground"
                    >
                      {
                        player.name
                      }
                    </Text>
                  )
                )}
              </View>

              {rounds?.length ? rounds.map((round, roundIndex) => (
                <View
                  key={round.id}
                  className={`min-h-8 flex-row items-center ${roundIndex <
                    rounds.length -
                    1
                    ? 'border-b border-border'
                    : ''
                    }`}
                >
                  <Text className="w-11 px-2 text-[13px] font-semibold leading-[18px] text-foreground">
                    {
                      round.number
                    }
                  </Text>

                  {round.scores.map(
                    (
                      score,
                      playerIndex
                    ) => (
                      <Text
                        key={
                          game
                            ?.players[
                            playerIndex
                          ]?.id ??
                          playerIndex
                        }
                        className="w-[86px] px-2 text-center text-[13px] font-semibold leading-[18px] text-foreground"
                      >
                        {
                          score
                        }
                      </Text>
                    )
                  )}
                </View>
              )
              ) : (
                <View className="min-h-8 flex-row items-center">
                  <Text className="flex-1 px-2 py-4 text-center text-[13px] font-semibold leading-[18px] text-muted-foreground">
                    No scores available
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetailsScreen;