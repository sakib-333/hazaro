import AsyncStorage from '@react-native-async-storage/async-storage';

import { GAMES_STORAGE_KEY } from '@/constants/storage-key/games.key';

import type { Game } from '../types/game.types';

export const deleteGame = async (
    gameId: string
): Promise<void> => {
    const storedGames = await AsyncStorage.getItem(
        GAMES_STORAGE_KEY
    );

    if (!storedGames) {
        throw new Error('No games found');
    }

    const games: Game[] = JSON.parse(storedGames);

    const updatedGames = games.filter(
        (game) => game.id !== gameId
    );

    await AsyncStorage.setItem(
        GAMES_STORAGE_KEY,
        JSON.stringify(updatedGames)
    );
};