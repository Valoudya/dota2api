import {Dispatch} from "redux";
import {MatchesAction, MatchesActionTypes} from "../../type/matches.ts";
import axios from "axios";

export const fetchProMatches = () => {
    return async (dispatch: Dispatch<MatchesAction>)=> {
        try {
            dispatch({type: MatchesActionTypes.FETCH_PRO_MATCHES})
            const response = await axios.get('https://api.opendota.com/api/proMatches')
            dispatch({type: MatchesActionTypes.FETCH_PRO_MATCHES_SUCCESS, payload: response.data})
        }
        catch (error) {
            dispatch({type: MatchesActionTypes.FETCH_PRO_MATCHES_ERROR, payload: 'Error pro matches'})
        }
    }
}