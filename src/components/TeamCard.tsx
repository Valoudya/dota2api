import {matchesInterface} from "../interfaces/Intarface.ts";
import {useAxiosGet} from "../hooks/axiosGet.tsx";
import {useEffect} from "react";

let playersInfo = []
const TeamCard = (props: matchesInterface) => {

    const link = 'https://api.opendota.com/api/heroStats'
    const {axiosData, loaded} = useAxiosGet(link)
    const {playerData} = props
    useEffect(() => {
        playersInfo = playerData.reduce((result, player) => {
            return [
                {
                    ...result,
                    id: player.account_id,
                    personaname: player.personaname
                }
            ];
        }, 0)
    }, [loaded])

    return (
        <div className='team-info w-full'>
            {loaded ? playersInfo.map(player => player.personaname) : 'Okay'}
        </div>
    );
};

export default TeamCard;