// @ts-nocheck TODO: исправить ошибку
import {PlayersDataType} from "../../type/playersDataInterface.ts";
import MatchesTeamCardInfo from "./MatchesTeamCardInfo.tsx";

const MatchesTeamCard = (props: PlayersDataType) => {

    const {playersData} = props

    return (
        <div className="team-info w-full grid-cols-1 grid mt-5
                        xl:grid-cols-2 xl:space-x-2">
            <div className="players space-y-2">
                <h3 className="text-[26px] text-[#66bb6a]">Radiant</h3>
                    <MatchesTeamCardInfo playersData={playersData.slice(0, 5)}/>
            </div>
            <div className="players space-y-2">
                <h3 className="text-[26px] text-[#bb6666] xl:text-end">Dire</h3>
                    <MatchesTeamCardInfo playersData={playersData.slice(5, 10)}/>
            </div>
        </div>
    );
};

export default MatchesTeamCard;