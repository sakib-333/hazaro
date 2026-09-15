import AsyncStorage from '@react-native-async-storage/async-storage'

import { SETTINGS_KEY } from '@/constants/storage-key/settings.key'
import { DEFAULT_WINNING_SCORE } from '../constants/defaultWinningScore.constants'

export const getDefaultWinningScore = async (): Promise<number> => {
    try {
        const storedSettings = await AsyncStorage.getItem(SETTINGS_KEY)

        if (!storedSettings) {
            return DEFAULT_WINNING_SCORE
        }

        const settings = JSON.parse(storedSettings)

        return settings.defaultWinningScore ?? DEFAULT_WINNING_SCORE
    } catch (error) {
        console.error('Failed to get default winning score:', error)

        return DEFAULT_WINNING_SCORE
    }
}