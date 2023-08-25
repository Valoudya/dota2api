import {combineReducers} from "redux";
import {heroesReducer} from "./heroesReducer.ts";
import {proMatchesReducer} from "./proMatchesReducer.ts";
import {publicMatchesReducer} from "./publicMatches.ts";

export const rootReducer = combineReducers({
    heroes: heroesReducer,
    proMatches: proMatchesReducer,
    publicMatches: publicMatchesReducer
})

export type RootState = ReturnType<typeof rootReducer>