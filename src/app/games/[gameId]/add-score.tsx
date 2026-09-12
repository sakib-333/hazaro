import AppHeader from '@/components/AppHeader'
import { useThemeColors } from '@/hooks/useThemeColors'
import { router, Stack } from 'expo-router'
import { Trash2, Wrench } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const players = [
    { id: 'player-1', name: 'Sakib', score: '100' },
    { id: 'player-2', name: 'Rahim', score: '180' },
    { id: 'player-3', name: 'Tanvir Ahmed', score: '80' },
    { id: 'player-4', name: 'Nadia', score: '' },
]

const AddScore = () => {
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
                            title={t("gameDetails.gameInfo.addScore")}
                        />
                    )
                }}
            />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                className="flex-1"
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerClassName="px-5 pb-8 pt-3"
                >
                    <View className="overflow-hidden rounded-[10px] border border-border bg-background">
                        {players.map((player, index) => (
                            <View
                                key={player.id}
                                className={`min-h-[76px] flex-row items-center px-3.5 ${index < players.length - 1 ? 'border-b border-border' : ''}`}
                            >
                                <View className="min-w-0 flex-1 py-3">
                                    <Text
                                        numberOfLines={1}
                                        className="mb-1 text-[13px] font-semibold leading-[18px] text-foreground"
                                    >
                                        {player.name}&apos;s score
                                    </Text>

                                    <TextInput
                                        defaultValue={player.score}
                                        keyboardType="number-pad"
                                        returnKeyType="done"
                                        placeholder="Tap to enter"
                                        placeholderTextColor={colors.mutedForeground}
                                        selectTextOnFocus
                                        className="h-7 p-0 text-lg leading-6 text-foreground"
                                    />
                                </View>

                                <View className="ml-3 flex-row items-center gap-1">
                                    <Pressable
                                        accessibilityRole="button"
                                        accessibilityLabel={`Delete ${player.name}'s score`}
                                        className="h-10 w-10 items-center justify-center rounded-full active:bg-surface"
                                    >
                                        <Trash2 size={18} color={colors.danger} />
                                    </Pressable>

                                    <Pressable
                                        accessibilityRole="button"
                                        accessibilityLabel={`Edit ${player.name}'s score`}
                                        className="h-10 w-10 items-center justify-center rounded-full active:bg-surface"
                                    >
                                        <Wrench size={18} color={colors.foreground} />
                                    </Pressable>
                                </View>
                            </View>
                        ))}
                    </View>

                    <View className="mt-4 flex-row gap-3">
                        <Pressable
                            accessibilityRole="button"
                            className="h-[50px] flex-1 items-center justify-center rounded-[10px] border border-primary bg-background active:opacity-70"
                            onPress={() => router.back()}
                        >
                            <Text className="text-[15px] font-bold text-primary">
                                Cancel
                            </Text>
                        </Pressable>

                        <Pressable
                            accessibilityRole="button"
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
    )
}

export default AddScore
