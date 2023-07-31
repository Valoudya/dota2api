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
        radiant_team? : string;
        radiant_win? : string;
        radiant_name? : string;
        dire_name? : string;
        duration? : number;
    }
}