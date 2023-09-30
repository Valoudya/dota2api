export interface matchesInterface {
    start_time? : number;
    match_id?: number;
    league_name?: string;
    radiant_team?: {
        name: string
    };
    radiant_win?: string;
    radiant_name?: string;
    radiant_score?: number;
    dire_team?: {
        name: string
    };
    dire_name?: string;
    dire_score?: number;
    dire_team_id?: number | undefined;
    duration?: number;
    radiant_team_id?: number | undefined;
    replay_url?: string | null;
    players?: [
        {
            player_slot: number
        }
    ]
}

export type MatchesDataType = { matchData: matchesInterface }