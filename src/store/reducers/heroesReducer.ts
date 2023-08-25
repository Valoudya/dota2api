import {HeroesAction, HeroesState, HeroesActionTypes} from "../../type/heroes.ts";

const initialState: HeroesState = {
    heroes: [],
    loading: false,
    error: null
}

export const heroesReducer = (state = initialState, action: HeroesAction): HeroesState => {
    switch (action.type) {
        case HeroesActionTypes.GET_HEROES:
            return {loading: true, error: null, heroes: []}
        case HeroesActionTypes.GET_HEROES_SUCCESS:
            return {loading: false, error: null, heroes: action.payload}
        case HeroesActionTypes.GET_HEROES_ERROR:
            return {loading: false, error: action.payload, heroes: []}
        default:
            return state
    }
}