import type { PlayerScore } from './player.types'

export type Round = {
    id: string
    scores: PlayerScore[]
    createdAt: string
}