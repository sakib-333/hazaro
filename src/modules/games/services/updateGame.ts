import AsyncStorage from '@react-native-async-storage/async-storage';

import { GAMES_STORAGE_KEY } from '@/constants/storage-key/games.key';

import type { Game } from '../types/game.types';

type UpdateGameInput = {
    name: string;
    playerNames: string[];
    winningScore: number;
};

export const updateGame = async (
    gameId: string,
    input: UpdateGameInput
): Promise<Game> => {
    const storedGames = await AsyncStorage.getItem(GAMES_STORAGE_KEY);

    if (!storedGames) {
        throw new Error('No games found');
    }

    const games: Game[] = JSON.parse(storedGames);

    const gameIndex = games.findIndex((game) => game.id === gameId);

    if (gameIndex === -1) {
        throw new Error('Game not found');
    }

    const existingGame = games[gameIndex];

    const updatedGame: Game = {
        ...existingGame,
        name: input.name.trim(),
        players: existingGame.players.map((player, index) => ({
            ...player,
            name: input.playerNames[index]?.trim() ?? player.name,
        })),
        settings: {
            ...existingGame.settings,
            winningScore: input.winningScore,
        },
        updatedAt: new Date().toISOString(),
    };

    games[gameIndex] = updatedGame;

    await AsyncStorage.setItem(
        GAMES_STORAGE_KEY,
        JSON.stringify(games)
    );

    return updatedGame;
};