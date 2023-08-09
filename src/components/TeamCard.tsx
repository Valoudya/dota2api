import {matchesInterface} from "../interfaces/Intarface.ts";
import {useAxiosGet} from "../hooks/axiosGet.tsx";
import {useEffect} from "react";

let playersInfo = []
const TeamCard = (props: matchesInterface) => {

    const link = 'https://api.opendota.com/api/heroStats'
    const {axiosData, loaded} = useAxiosGet(link)
    const {playerData} = props
    useEffect(() => {
        playersInfo = playerData.map(player => {
            return {
                name: player.personaname,
                hero: player.hero_id,
                kills: player.kills,
                deaths: player.deaths,
                assists: player.assists
            }
        })
    }, [loaded])

    return (
        <div className="team-info w-full grid-cols-2 grid mt-5 space-x-2">
            <div className="players space-y-2">
                <h3 className="text-[26px] text-[#66bb6a]">Radiant</h3>
                <div className="tample player-container p-2 grid grid-cols-3 border-2 border-[#202020]">
                    <div className="player-hero flex align-middle">
                        <span>Hero</span>
                        <span className="ml-2">Name</span>
                    </div>
                    <div className="player-kill grid grid-cols-3 justify-items-center">
                        <span className="text-[#66bb6a]">Kills</span>
                        <span className="text-[#bb6666]">Deaths</span>
                        <span>Assists</span>
                    </div>
                </div>
                {loaded ? playersInfo.slice(0,5).map(player =>
                    <div className="player-container p-2 grid grid-cols-3 border-2 border-[#202020]">
                        <div className="player-hero flex align-middle">
                            <img src={`https://api.opendota.com${axiosData.find(item => item.id == player.hero).icon}`} alt=""/>
                            <span className="ml-2">{player.name}</span>
                        </div>
                        <div className="player-kill grid grid-cols-3 justify-items-center">
                            <span className="text-[#66bb6a]">{player.kills}</span>
                            <span className="text-[#bb6666]">{player.deaths}</span>
                            <span>{player.assists}</span>
                        </div>
                    </div>
                ) : ''}
            </div>
            <div className="players space-y-2">
                <h3 className="text-[26px] text-[#bb6666]">Dire</h3>
                <div className="tample player-container p-2 grid grid-cols-3 border-2 border-[#202020]">
                    <div className="player-hero flex align-middle">
                        <span>Hero</span>
                        <span className="ml-2">Name</span>
                    </div>
                    <div className="player-kill grid grid-cols-3 justify-items-center">
                        <span className="text-[#66bb6a]">Kills</span>
                        <span className="text-[#bb6666]">Deaths</span>
                        <span>Assists</span>
                    </div>
                </div>
                {loaded ? playersInfo.slice(5,10).map(player =>
                    <div className="player-container p-2 grid grid-cols-3 border-2 border-[#202020]">
                        <div className="player-hero flex align-middle">
                            <img src={`https://api.opendota.com${axiosData.find(item => item.id == player.hero).icon}`} alt=""/>
                            <span className="ml-2">{player.name}</span>
                        </div>
                        <div className="player-kill grid grid-cols-3 justify-items-center">
                            <span className="text-[#66bb6a]">{player.kills}</span>
                            <span className="text-[#bb6666]">{player.deaths}</span>
                            <span>{player.assists}</span>
                        </div>
                    </div>
                ) : ''}
            </div>
        </div>
    );
};

export default TeamCard;