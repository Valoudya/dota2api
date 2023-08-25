import {matchesInterface} from "./Intarface.ts";

export interface MatchesState {
    matches: matchesInterface[];
    loading: boolean;
    error: null | string;
}

export enum MatchesActionTypes {
    FETCH_PRO_MATCHES = "FETCH_PRO_MATCHES",
    FETCH_PRO_MATCHES_SUCCESS = "FETCH_PRO_MATCHES_SUCCESS",
    FETCH_PRO_MATCHES_ERROR = "FETCH_PRO_MATCHES_ERROR",
    FETCH_PUBLIC_MATCHES = "FETCH_PUBLIC_MATCHES",
    FETCH_PUBLIC_MATCHES_SUCCESS = "FETCH_PUBLIC_MATCHES_SUCCESS",
    FETCH_PUBLIC_MATCHES_ERROR = "FETCH_PUBLIC_MATCHES_ERROR"
}

interface FetchProMatches {
    type: MatchesActionTypes.FETCH_PRO_MATCHES
}

interface FetchProMatchesSuccess {
    type: MatchesActionTypes.FETCH_PRO_MATCHES_SUCCESS;
    payload: any[]
}

interface FetchProMatchesError {
    type: MatchesActionTypes.FETCH_PRO_MATCHES_ERROR;
    payload: string
}

interface FetchPublicMatches {
    type: MatchesActionTypes.FETCH_PUBLIC_MATCHES
}

interface FetchPublicMatchesSuccess {
    type: MatchesActionTypes.FETCH_PUBLIC_MATCHES_SUCCESS;
    payload: any[]
}

interface FetchPublicMatchesError {
    type: MatchesActionTypes.FETCH_PUBLIC_MATCHES_ERROR;
    payload: string
}

export type MatchesAction =
    FetchProMatches
    | FetchProMatchesSuccess
    | FetchProMatchesError
    | FetchPublicMatches
    | FetchPublicMatchesSuccess
    | FetchPublicMatchesError
