import {matchesInterface} from "../interfaces/Intarface.ts";
import {useAxiosGet} from "../hooks/axiosGet.tsx";
import Loading from "./Loading.tsx";
import TeamCardInfo from "./TeamCardInfo.tsx";

const TeamCard = (props: matchesInterface) => {

    const link = 'https://api.opendota.com/api/heroStats'
    const {axiosData, loaded} = useAxiosGet(link)
    const {playerData} = props

    return (
        <div className="team-info w-full grid-cols-1 grid mt-5
                        xl:grid-cols-2 xl:space-x-2">
            <div className="players space-y-2">
                <h3 className="text-[26px] text-[#66bb6a]">Radiant</h3>
                {loaded ?
                    <TeamCardInfo players={playerData.slice(0, 5)} heroesData={axiosData}/>
                    : <Loading/>}
            </div>
            <div className="players space-y-2">
                <h3 className="text-[26px] text-[#bb6666] xl:text-end">Dire</h3>
                {loaded ?
                    <TeamCardInfo players={playerData.slice(5, 10)} heroesData={axiosData}/>
                    : <Loading/>}
            </div>
        </div>
    );
};

export default TeamCard;