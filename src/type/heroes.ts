import {heroesInterface} from "./Intarface.ts";

export type HeroesType = heroesInterface[]

export interface HeroesState {
    heroes: HeroesType;
    loading: boolean;
    error: null | string
}

export enum HeroesActionTypes {
    GET_HEROES = "GET_HEROES",
    GET_HEROES_SUCCESS = "GET_HEROES_SUCCESS",
    GET_HEROES_ERROR = "GET_HEROES_ERROR"
}

interface GetHeroesAction {
    type: HeroesActionTypes.GET_HEROES;
}

interface GetHeroesSuccessAction {
    type: HeroesActionTypes.GET_HEROES_SUCCESS;
    payload: heroesInterface[];
}

interface GetHeroesErrorAction {
    type: HeroesActionTypes.GET_HEROES_ERROR;
    payload: string
}

export type HeroesAction = GetHeroesAction | GetHeroesSuccessAction | GetHeroesErrorAction

