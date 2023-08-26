import {Link} from "react-router-dom";
import {MatchesDataType} from "../../type/playersDataInterface.ts";

const MatchCardPro = (props: MatchesDataType) => {

    const {matchData} = props

    const time:number = props.matchData.duration ?? 0,
        duration = {
            minutes: Math.floor(time / 60).toString().padStart(2, '0'),
            seconds: (time % 60).toString().padStart(2, '0')
        }

    return (
        <div className="match-card flex flex-col items-center border-2 border-[#131313] p-2
                        sm:grid sm:grid-cols-3">
            <div className="match-card__info flex flex-col items-center
                            sm:items-start">
                <Link to={`/matches/match?id=${matchData.match_id ?? ''}`}
                      className='text-blue-200'>{matchData.match_id}</Link>
                <span className="block">{matchData.league_name}</span>
            </div>
            <div className="match-card__duration flex items-center justify-center my-2">
                <p>{`${duration.minutes}:${duration.seconds}`}</p>
            </div>
            <div className="match-card__teams w-full flex items-center justify-between">
                <div className="match-card__teams__team w-[100%]">
                    <p className="text-[#66bb6a]">{matchData.radiant_win ? '👑 ' : ''}{matchData.radiant_name}</p>
                </div>
                <div className="match-card__teams__team w-[100%] text-end">
                    <p className="text-[#bb6666]">{!matchData.radiant_win ? '👑 ' : ''}{matchData.dire_name}</p>
                </div>
            </div>
        </div>
    );
};

export default MatchCardPro;