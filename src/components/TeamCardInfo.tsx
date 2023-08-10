import {Link} from "react-router-dom";

const TeamCardInfo = (props) => {

    const {players} = props
    const {heroesData} = props

    return (
        <>
            <div className="tample player-container p-2 hidden grid-cols-3 border-2 border-[#202020]
                            md:grid">
                <div className="player-hero flex align-middle">
                    <span>Hero</span>
                    <span className="ml-2">Name</span>
                </div>
                <div className="player-kill grid grid-cols-3 justify-items-center">
                    <span className="text-[#66bb6a]">Kills</span>
                    <span className="text-[#bb6666]">Deaths</span>
                    <span>Assists</span>
                </div>
                <div className="player-another grid grid-cols-3 justify-items-center">
                    <span>LVL</span>
                    <span>GPM/XPM</span>
                    <span>HD</span>
                </div>
            </div>
            {
                players.map(player =>
                    <div className="player-container p-2 grid grid-rows-3 border-2 border-[#202020] space-y-3
                                    md:space-y-0 md:grid-cols-3 md:grid-rows-1">
                        <div className="player-hero flex flex-col items-center
                                        md:flex-row md:align-middle">
                            <img
                                src={`https://api.opendota.com${heroesData.find(item => item.id == player.hero_id).icon}`}
                                alt=""
                                className="w-[32px] h-[32px]"
                            />
                            <Link className="md:ml-3"
                                  to={`/players/player?id=${player.account_id}`}>{player.personaname}</Link>
                        </div>
                        <div className="player-kdar grid grid-cols-3 justify-items-center">
                            <span className="text-[#66bb6a]"><span className="md:hidden">Kills: </span>{player.kills}</span>
                            <span className="text-[#bb6666]"><span className="md:hidden">Deaths: </span>{player.deaths}</span>
                            <span><span className="md:hidden">Assists: </span>{player.assists}</span>
                        </div>
                        <div className="player-another grid grid-cols-3 justify-items-center">
                            <span><span className="md:hidden">LVL</span> {player.level}</span>
                            <span className="flex flex-col items-center"><span className="md:hidden">GPM/XPM: </span>{player.gold_per_min}/{player.xp_per_min}</span>
                            <span><span className="md:hidden">HD: </span>{player.hero_damage}</span>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default TeamCardInfo;