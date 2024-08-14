
import { TextComponent, ImageComponent } from "./Components";

export type ShowDTO = {
    id: string
    name: string
    summary: string
    image: {original: string}
}

export type EpisodeDTO = {
    id: string
    name: string
    summary: string
    image: {original: string}
    season: string
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
}
