import {Link} from "react-router-dom";
import {MatchesDataType} from "../type/Intarface.ts";

const MatchCardPublic = (props: MatchesDataType) => {

    const {matchData} = props

    const time:number = matchData.duration ?? 0,
        duration = {
            minutes: Math.floor(time/60).toString().padStart(2, '0'),
            seconds: (time % 60).toString().padStart(2, '0')
        }

    return (
        <div className="match-card flex flex-col items-center border-2 border-[#131313] p-2
                        sm:grid sm:grid-cols-3">
            <div className="match-card__info flex flex-col items-center
                            sm:items-start">
                <Link to={`/matches/match?id=${matchData.match_id ?? ''}`}
                      className='text-blue-200'>{matchData.match_id}</Link>
            </div>
            <div className="match-card__duration flex items-center justify-center my-2">
                <p>{`${duration.minutes}:${duration.seconds}`}</p>
            </div>
            <div className="match-card__teams w-full flex flex-col items-center justify-between
                            md:grid md:grid-cols-2">
                <div className="match-card__teams__team radiant w-[100%] text-center
                                md:text-start">
                    <p className="text-[#66bb6a]">{matchData.radiant_win ? '👑 ' : ''}{matchData.radiant_team}</p>
                </div>
                <div className="match-card__teams__team dire w-[100%] text-center
                                md:text-end">
                    <p className="text-[#bb6666]">{!matchData.radiant_win ? '👑 ' : ''}{matchData.dire_team}</p>
                </div>
            </div>
        </div>
    );
};


export default MatchCardPublic;