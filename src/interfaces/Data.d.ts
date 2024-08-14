
import { TextComponent, ImageComponent } from "./Components";

export type ShowDTO = {
    name: TextComponent
    summary: TextComponent
    image: ImageComponent
}

export type Show = {
    name: TextComponent
    summary: TextComponent
    image: ImageComponent
    episodes: object[]
}

export type EpisodeDTO = {
    title: TextComponent
    description: TextComponent
    image: ImageComponent
}
