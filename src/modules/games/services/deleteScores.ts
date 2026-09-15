import AsyncStorage from '@react-native-async-storage/async-storage';

import { GAMES_STORAGE_KEY } from '@/constants/storage-key/games.key';

import type { Game } from '../types/game.types';

const getStoredGames = async (): Promise<Game[]> => {
    const storedGames = await AsyncStorage.getItem(
        GAMES_STORAGE_KEY
    );

    if (!storedGames) {
        throw new Error('No games found');
    }

    return JSON.parse(storedGames);
};

export const deleteLastScore = async (
    gameId: string
): Promise<Game> => {
    const games = await getStoredGames();

    const gameIndex = games.findIndex(
        (game) => game.id === gameId
    );

    if (gameIndex === -1) {
        throw new Error('Game not found');
    }

    const existingGame = games[gameIndex];

    if (!existingGame.rounds.length) {
        throw new Error('No scores found');
    }

    const updatedGame: Game = {
        ...existingGame,
        rounds: existingGame.rounds.slice(0, -1),
        updatedAt: Date.now(),
    };

    games[gameIndex] = updatedGame;

    await AsyncStorage.setItem(
        GAMES_STORAGE_KEY,
        JSON.stringify(games)
    );

    return updatedGame;
};

export const deleteAllScores = async (
    gameId: string
): Promise<Game> => {
    const games = await getStoredGames();

    const gameIndex = games.findIndex(
        (game) => game.id === gameId
    );

    if (gameIndex === -1) {
        throw new Error('Game not found');
    }

    const existingGame = games[gameIndex];

    const updatedGame: Game = {
        ...existingGame,
        rounds: [],
        updatedAt: Date.now(),
    };

    games[gameIndex] = updatedGame;

    await AsyncStorage.setItem(
        GAMES_STORAGE_KEY,
        JSON.stringify(games)
    );

    return updatedGame;
};