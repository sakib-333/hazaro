import AppHeader from '@/components/AppHeader'
import { Stack } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const EditGameScreen = () => {
    const { t } = useTranslation();
    return (
        <SafeAreaView
            edges={["left", "right"]}
            className="flex-1 bg-background px-5"
        >
            <Stack.Screen
                options={{
                    headerShown: true,
                    header: () => (
                        <AppHeader title={t('game.editGame.title')} />
                    )
                }}
            />
            <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-2xl font-bold text-primary">
                    Edit Game
                </Text>

            </View>
        </SafeAreaView >
    )
}

export default EditGameScreen