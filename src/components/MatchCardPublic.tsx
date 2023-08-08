import {useState} from 'react';
import {Link} from "react-router-dom";
import {matchesInterface} from "../interfaces/Intarface.ts";

const MatchCardPublic = (props: matchesInterface) => {

    const {matchData}: matchesInterface = props

    const radiantTeam:string = useState(matchData.radiant_team)

    const time:number = matchData.duration,
        duration = {
            minutes: Math.floor(time/60).toString().padStart(2, '0'),
            seconds: (time % 60).toString().padStart(2, '0')
        }

    return (
        <div className="match-card match-card grid grid-cols-3 border-2 border-[#131313] p-2">
            <div className="match-card__info">
                <Link to={`/matches/match/?id=${matchData.match_id}`}
                      className='text-blue-200'>{matchData.match_id}</Link>
            </div>
            <div className="match-card__duration flex justify-center">
                <p>{`${duration.minutes}:${duration.seconds}`}</p>
            </div>
            <div className="match-card__teams flex justify-between">
                <div className="match-card__teams__team radiant w-[50%]">
                    <p className="text-[#66bb6a]">{matchData.radiant_win ? '👑 ' : ''}{radiantTeam}</p>
                </div>
                <div className="match-card__teams__team dire w-[50%]">
                    <p className="text-[#bb6666]">{!matchData.radiant_win ? '👑 ' : ''}{matchData.dire_team}</p>
                </div>
            </div>
        </div>
    );
};


export default MatchCardPublic;