import {Dispatch} from "redux";
import {MatchesAction, MatchesActionTypes} from "../../type/matches.ts";
import axios from "axios";

export const fetchPublicMatches = () => {
    return async (dispatch: Dispatch<MatchesAction>)=> {
        try {
            dispatch({type: MatchesActionTypes.FETCH_PUBLIC_MATCHES})
            const response = await axios.get('https://api.opendota.com/api/publicMatches')
            dispatch({type: MatchesActionTypes.FETCH_PUBLIC_MATCHES_SUCCESS, payload: response.data})
        }
        catch (error) {
            dispatch({type: MatchesActionTypes.FETCH_PUBLIC_MATCHES_ERROR, payload: 'Error pro matches'})
        }
    }
}