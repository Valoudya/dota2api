import {HeroesAction, HeroesActionTypes} from "../../type/heroes.ts";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchHeroes = () => {
    return async (dispatch: Dispatch<HeroesAction>) => {
        try {
            dispatch({type: HeroesActionTypes.GET_HEROES})
            const response = await axios.get('https://api.opendota.com/api/heroStats')
            dispatch({type: HeroesActionTypes.GET_HEROES_SUCCESS, payload: response.data})
        }
        catch (error) {
            dispatch({type: HeroesActionTypes.GET_HEROES_ERROR, payload: "Error Heroes"})
        }
    }
}