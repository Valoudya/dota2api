import {MatchesAction, MatchesState, MatchesActionTypes} from "../../type/matches.ts";

const initialState : MatchesState = {
    matches: [],
    loading: false,
    error: null
}

export const proMatchesReducer = (state = initialState, action: MatchesAction) : MatchesState => {
    switch (action.type) {
        case MatchesActionTypes.FETCH_PRO_MATCHES :
            return {loading: true, error: null, matches: []}
        case MatchesActionTypes.FETCH_PRO_MATCHES_SUCCESS :
            return {loading: false, error: null, matches: action.payload}
        case MatchesActionTypes.FETCH_PRO_MATCHES_ERROR :
            return {loading: false, error: action.payload, matches: []}
        default : return state
    }
}