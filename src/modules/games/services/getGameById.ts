import AsyncStorage from '@react-native-async-storage/async-storage';

import { GAMES_STORAGE_KEY } from '@/constants/storage-key/games.key';
import type { Game } from '../types/game.types';

export const getGameById = async (
    gameId: string
): Promise<Game | null> => {
    try {
        const storedGames = await AsyncStorage.getItem(
            GAMES_STORAGE_KEY
        );

        if (!storedGames) {
            return null;
        }

        const games: Game[] = JSON.parse(storedGames);

        return (
            games.find((game) => game.id === gameId) ??
            null
        );
    } catch (error) {
        console.error('Failed to get game by id:', error);

        return null;
    }
};