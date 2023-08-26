import {HeroDataType} from "../../type/heroesDataInterface.ts";

const HeroPageStats = (props: HeroDataType) => {
    const {heroData} = props

    if (!heroData) {
        return <></>
    }

    return (
        <div className="hero-stats grid grid-cols-1 mt-5 gap-x-2 gap-y-2
                        sm:grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4">
            <div className="hero-stats__column w-full">
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#202020]">
                    <span>Base attack:</span>
                    {heroData.base_attack_min} - {heroData.base_attack_max}
                </div>
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#303030]">
                    <span>Attack range:</span>
                    {heroData.attack_range}
                </div>
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#202020]">
                    <span>Attack speed:</span>
                    {heroData.attack_rate}
                </div>
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#303030]">
                    <span>Projectile speed:</span>
                    {heroData.projectile_speed}
                </div>
            </div>
            <div className="hero-stats__column w-full">
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#202020]">
                    <span>Health:</span>
                    {heroData.base_health}
                </div>
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#303030]">
                    <span>Health regen:</span>
                    {heroData.base_health_regen}
                </div>
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#202020]">
                    <span>Mana:</span>
                    {heroData.base_mana}
                </div>
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#303030]">
                    <span>Mana regen:</span>
                    {heroData.base_mana_regen}
                </div>
            </div>
            <div className="hero-stats__column w-full">
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#202020]">
                    <span>Base armor:</span>
                    {heroData.base_armor}
                </div>
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#303030]">
                    <span>Magic resistance:</span>
                    {heroData.base_mr}
                </div>
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#202020]">
                    <span>Move speed:</span>
                    {heroData.move_speed}
                </div>
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#303030]">
                    <span>Turn speed:</span>
                    {heroData.turn_rate}
                </div>
            </div>
            <div className="hero-stats__column w-full">
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#202020]">
                    <span>Number legs:</span>
                    {heroData.legs}
                </div>
                <div className="hero-stats__column__raw flex justify-between p-2 bg-[#303030]">
                    <span>CM enabled:</span>
                    {heroData.cm_enabled?.toString()}
                </div>
            </div>
        </div>
    );
};

export default HeroPageStats;