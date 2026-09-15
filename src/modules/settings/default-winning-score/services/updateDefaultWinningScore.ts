import AsyncStorage from '@react-native-async-storage/async-storage'

import { SETTINGS_KEY } from '@/constants/storage-key/settings.key'

export const updateDefaultWinningScore = async (
    defaultWinningScore: number
): Promise<void> => {
    try {
        const storedSettings = await AsyncStorage.getItem(SETTINGS_KEY)

        const currentSettings = storedSettings
            ? JSON.parse(storedSettings)
            : {}

        const updatedSettings = {
            ...currentSettings,
            defaultWinningScore,
        }

        await AsyncStorage.setItem(
            SETTINGS_KEY,
            JSON.stringify(updatedSettings)
        )
    } catch (error) {
        console.error('Failed to update default winning score:', error)

        throw error
    }
}