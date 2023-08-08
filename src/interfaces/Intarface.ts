export interface heroesInterface {
    heroData: {
        id: undefined;
        name?: string;
        localized_name?: string;
        primary_attr?: string;
        attack_type?: string;
        roles?: [number: string]
        img?: string;
        icon?: string;
        base_health?: number;
        base_health_regen?: number;
        base_mana?: number;
        base_mana_regen?: number;
        base_armor?: number;
        base_mr?: number;
        base_attack_min?: number;
        base_attack_max?: number;
        base_str? : number;
        base_agi? : number;
        base_int? : number;
        str_gain? : number;
        agi_gain? : number;
        int_gain? : number;
    }
}

export interface matchesInterface {
    matchData: {
        match_id?: number;
        league_name?: string;
        radiant_team?: string | {
            name?: string | undefined;
        }
        radiant_win?: string;
        radiant_name?: string;
        radiant_score?: number;
        dire_team?: string | {
            name?: string | undefined;
        }
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
}

export interface playerListInterface {
    playerData: {
        account_id?: number | string;
        rating?: number;
        fh_unavailable?: boolean;
    }
}

export interface playerDataInterface {
    solo_competitive_rank?: number;
    competitive_rank?: number;
    rank_tier?: number;
    leaderboard_rank?: number;
    mmr_estimate?: {
        estimate?: number
    }
    profile? : {
        account_id?: number;
        personaname?: string;
        name?: string;
        plus?: boolean;
        cheese?: number;
        steamid?: string;
        avatar?: string;
        avatarmedium?: string;
        avatarfull?: string;
        profileurl?: string;
        last_login?: string;
        loccountrycode?: string;
        is_contributor?: boolean;
        is_subscriber?: boolean;
    }
}