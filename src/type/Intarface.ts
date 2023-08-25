export interface heroesInterface {
    id?: number;
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
    base_str?: number;
    base_agi?: number;
    base_int?: number;
    str_gain?: number;
    agi_gain?: number;
    int_gain?: number;
    attack_range?: number;
    attack_rate?: number;
    projectile_speed?: number;
    move_speed?: number;
    turn_rate?: number;
    legs?: number;
    cm_enabled?: number;
}

export type HeroDataType = { heroData: heroesInterface }

export interface matchesInterface {
    match_id?: number;
    league_name?: string;
    radiant_team?: string;
    radiant_win?: string;
    radiant_name?: string;
    radiant_score?: number;
    dire_team?: string;
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

export interface playerListInterface {
    account_id?: number;
    rating?: number;
    fh_unavailable?: boolean;
    personaname?: string;
    level?: number;
    gold_per_min?: number;
    xp_per_min?: number;
    hero_damage?: number;
    assists?: number;
    kills?: number;
    deaths?: number
}

export interface playerDataInterface {
    solo_competitive_rank?: number;
    competitive_rank?: number;
    rank_tier?: number;
    leaderboard_rank?: number;
    mmr_estimate?: {
        estimate?: number
    }
    profile?: {
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

export type PlayersListType = {
    playersData: playerListInterface[]
}

export type PlayersDataType = {
    playersData: playerDataInterface[]
}