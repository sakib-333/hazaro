import AsyncStorage from '@react-native-async-storage/async-storage';

import { GAMES_STORAGE_KEY } from '@/constants/storage-key/games.key';

import type { Game } from '../types/game.types';

export const getGames = async (): Promise<Game[]> => {
    try {
        const storedGames = await AsyncStorage.getItem(
            GAMES_STORAGE_KEY
        );

        if (!storedGames) {
            return [];
        }

        const games: Game[] = JSON.parse(storedGames);

        return games;
    } catch (error) {
        console.error('Failed to get games:', error);

        return [];
    }
};