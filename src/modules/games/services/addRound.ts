import AsyncStorage from '@react-native-async-storage/async-storage';

import { GAMES_STORAGE_KEY } from '@/constants/storage-key/games.key';

import type { Game } from '../types/game.types';
import type { PlayerScore } from '../types/player.types';

export const addRound = async (
    gameId: string,
    scores: PlayerScore[]
): Promise<Game> => {
    const storedGames = await AsyncStorage.getItem(
        GAMES_STORAGE_KEY
    );

    if (!storedGames) {
        throw new Error('No games found');
    }

    const games: Game[] = JSON.parse(storedGames);

    const gameIndex = games.findIndex(
        (game) => game.id === gameId
    );

    if (gameIndex === -1) {
        throw new Error('Game not found');
    }

    const existingGame = games[gameIndex];

    const now = Date.now();

    const updatedGame: Game = {
        ...existingGame,
        rounds: [
            ...existingGame.rounds,
            {
                id: `round-${Date.now()}`,
                scores,
                createdAt: now,
            },
        ],
        updatedAt: now,
    };

    games[gameIndex] = updatedGame;

    await AsyncStorage.setItem(
        GAMES_STORAGE_KEY,
        JSON.stringify(games)
    );

    return updatedGame;
};