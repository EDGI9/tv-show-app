
import { TextComponent, ImageComponent } from "./Components";

export type ShowDTO = {
    id: string
    name: string
    summary: string
    image: {original: string}
    rating: {average: number}
}

export type EpisodeDTO = {
    id: string
    name: string
    summary: string
    image: {original: string}
    season: string
    airdate: string
    runtime: number
    rating: {average: number}
}

export type Show = {
    id: string
    name: string
    summary: string
    image: string
    episodes: object[Episode]
}

export type Episode = {
    id: string
    name: string
    summary: string
    image: string
    season: string
    airdate: string
    runtime: number
    rating: number
}
