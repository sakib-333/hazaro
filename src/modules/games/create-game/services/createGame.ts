import AsyncStorage from '@react-native-async-storage/async-storage';

import { GAMES_STORAGE_KEY } from '@/constants/storage-key/games.key';
import { Game } from '../../types/game.types';


type CreateGameInput = {
    name: string;
    playerNames: string[];
    winningScore: number;
};

export const createGame = async ({
    name,
    playerNames,
    winningScore,
}: CreateGameInput): Promise<Game> => {
    const timestamp = Date.now();

    const game: Game = {
        id: `game-${timestamp}`,
        name: name.trim(),

        players: playerNames.map((playerName, index) => ({
            id: `player-${timestamp}-${index}`,
            name: playerName.trim(),
        })),

        rounds: [],

        settings: {
            winningScore,
        },

        createdAt: timestamp,
        updatedAt: timestamp,
    };

    const storedGames = await AsyncStorage.getItem(GAMES_STORAGE_KEY);

    const games: Game[] = storedGames
        ? JSON.parse(storedGames)
        : [];

    const updatedGames = [game, ...games];

    await AsyncStorage.setItem(
        GAMES_STORAGE_KEY,
        JSON.stringify(updatedGames)
    );

    return game;
};