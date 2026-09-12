import AppHeader from '@/components/AppHeader';
import GameDetailsHeaderActions from '@/components/header-right-action/GameDetailsHeaderActions';
import { useThemeColors } from '@/hooks/useThemeColors';
import { router, Stack } from 'expo-router';
import { Plus, Trash2 } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const players = [
  { id: 'player-1', name: 'Sakib', rank: '1st', total: 214 },
  { id: 'player-2', name: 'Rahim', rank: '2nd', total: 187 },
  { id: 'player-3', name: 'Tanvir Ahmed', rank: '3rd', total: 156 },
  { id: 'player-4', name: 'Nadia', rank: '4th', total: 128 },
];

const rounds = [
  { id: 'round-4', number: 4, scores: [62, 41, 36, 29] },
  { id: 'round-3', number: 3, scores: [48, 52, 39, 33] },
  { id: 'round-2', number: 2, scores: [55, 46, 44, 31] },
  { id: 'round-1', number: 1, scores: [49, 48, 37, 35] },
];

const GameDetailsScreen = () => {
  const { t } = useTranslation();
  const colors = useThemeColors();

  return (
    <SafeAreaView
      edges={["left", "right"]}
      className="flex-1 bg-background"
    >
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <AppHeader
              title={t("gameDetails.title")}
              rightAction={
                <GameDetailsHeaderActions
                  onEdit={() => router.push('/games/[gameId]/edit')}
                  onDelete={() => console.log("Delete button pressed")}
                />
              }
            />
          )
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-7 pt-3.5"
      >
        <View className="mb-[18px]">
          <View className="mb-1.5 min-h-[38px] flex-row items-center justify-between gap-3">
            <Text className="flex-1 text-[15px] font-bold leading-5 text-foreground">
              {t('gameDetails.scoreboard.title')}
            </Text>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('gameDetails.actions.addScore')}
              className="min-h-8 flex-row items-center gap-1.5 rounded-lg border border-border px-2 active:opacity-60"
            >
              <Plus size={16} color={colors.foreground} />
              <Text className="text-sm font-bold leading-[18px] text-foreground">
                {t('gameDetails.actions.addScore')}
              </Text>
            </Pressable>
          </View>

          <View className="overflow-hidden rounded-lg border border-border">
            <View className="min-h-9 flex-row items-center border-b border-border bg-surface">
              <Text className="w-[58px] px-2 text-sm font-extrabold leading-[19px] text-muted-foreground">
                {t('gameDetails.scoreboard.rank')}
              </Text>
              <Text className="min-w-20 flex-1 px-2 text-center text-sm font-extrabold leading-[19px] text-muted-foreground">
                {t('gameDetails.scoreboard.player')}
              </Text>
              <Text className="w-[82px] px-2 text-right text-sm font-extrabold leading-[19px] text-muted-foreground">
                {t('gameDetails.scoreboard.score')}
              </Text>
            </View>

            {players.map((player, index) => (
              <View
                key={player.id}
                className={`min-h-[34px] flex-row items-center ${index < players.length - 1 ? 'border-b border-border' : ''}`}
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
            ))}
          </View>
        </View>

        <View className="mb-[18px]">
          <View className="mb-1.5 min-h-[38px] flex-row items-center justify-between gap-3">
            <Text className="flex-1 text-[15px] font-bold leading-5 text-foreground">
              {t('gameDetails.pointTable.title')}
            </Text>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('gameDetails.actions.deleteScore')}
              className="min-h-8 flex-row items-center gap-1.5 rounded-lg border border-danger px-2 active:opacity-60"
            >
              <Trash2 size={16} color={colors.danger} />
              <Text className="text-sm font-bold leading-[18px] text-danger">
                {t('gameDetails.actions.deleteScore')}
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
                  {t('gameDetails.pointTable.round')}
                </Text>

                {players.map((player) => (
                  <Text
                    key={player.id}
                    numberOfLines={1}
                    className="w-[86px] px-2 text-center text-[13px] font-extrabold leading-[18px] text-muted-foreground"
                  >
                    {player.name}
                  </Text>
                ))}
              </View>

              {rounds.map((round, roundIndex) => (
                <View
                  key={round.id}
                  className={`min-h-8 flex-row items-center ${roundIndex < rounds.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <Text className="w-11 px-2 text-[13px] font-semibold leading-[18px] text-foreground">
                    {round.number}
                  </Text>

                  {round.scores.map((score, playerIndex) => (
                    <Text
                      key={players[playerIndex].id}
                      className="w-[86px] px-2 text-center text-[13px] font-semibold leading-[18px] text-foreground"
                    >
                      {score}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetailsScreen;
