export interface TeamsInterface {
    team_id?: number;
    rating?: number;
    wins?: number;
    losses?: number;
    last_match_time?: number;
    name?: string;
    tag?: string;
    logo_url?: string
}


export interface TeamsState {
    teams: [],
    teamsLoaded: boolean,
    error: null | boolean
}

export type TeamDataType = { team: TeamsInterface }