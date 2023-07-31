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
    }
}

export interface matchesInterface {
    matchData: {
        match_id: number;
        league_name? : string;
        radiant_team? : string | {
            name?: string | undefined;
        }
        radiant_win? : string;
        radiant_name? : string;
        radiant_score? : number;
        dire_team? : string | {
            name?: string | undefined;
        }
        dire_name? : string;
        dire_score? : number;
        dire_team_id? : number | undefined;
        duration? : number;
        radiant_team_id? : number | undefined;
        replay_url? : string | null;
        players? : [
            {
                player_slot: number
            }
        ]
    }
}