import type { Player } from './player.types'
import type { Round } from './round.types'

export type GameSettings = {
    winningScore: number
}

export type Game = {
    id: string
    name: string
    players: Player[]
    rounds: Round[]
    settings: GameSettings
    createdAt: number
    updatedAt: number
}