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

export type PlayersListType = { playersData: playerListInterface[] }
export type PlayersDataType = { playersData: playerDataInterface[] }