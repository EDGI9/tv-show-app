
import { TextComponent, ImageComponent } from "./Components";

export type ShowDTO = {
    id: string
    name: string
    summary: string
    image: {original: string}
    rating: {average: number}
}

export type ShowListDTO = {
    score: number
    show: ShowDTO
}

export type EpisodeDTO = {
    id: string
    name: string
    summary: string
    image: {original: string}
    number: string
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
    rating: number
    episodes: object[Episode]
}

export type Episode = {
    id: string
    name: string
    summary: string
    image: string
    number: string
    season: string
    airdate: string
    runtime: number
    rating: number
}
