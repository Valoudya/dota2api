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