import {Link} from "react-router-dom";
import {matchesInterface} from "../interfaces/heroesIntarface.ts";

const MatchCardPro = (props: matchesInterface) => {

    const {matchData}: matchesInterface = props

    const time:number = props.matchData.duration,
        duration = {
            minutes: Math.floor(time / 60).toString().padStart(2, '0'),
            seconds: (time % 60).toString().padStart(2, '0')
        }

    return (
        <div className="match-card grid grid-cols-3 border-2 border-[#131313] p-2">
            <div className="match-card__info">
                <Link to={`/matches/match?id=${matchData.match_id}`}
                      className='text-blue-200'>{matchData.match_id}</Link>
                <span className="block">{matchData.league_name}</span>
            </div>
            <div className="match-card__duration flex items-center justify-center">
                <p>{`${duration.minutes}:${duration.seconds}`}</p>
            </div>
            <div className="match-card__teams flex items-center justify-between">
                <div className="match-card__teams__team w-[50%]">
                    <p className="text-[#66bb6a]">{matchData.radiant_win ? '👑 ' : ''}{matchData.radiant_name}</p>
                </div>
                <div className="match-card__teams__team w-[50%]">
                    <p className="text-[#bb6666]">{!matchData.radiant_win ? '👑 ' : ''}{matchData.dire_name}</p>
                </div>
            </div>
        </div>
    );
};

export default MatchCardPro;