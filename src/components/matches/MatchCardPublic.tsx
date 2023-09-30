// @ts-nocheck TODO: исправить ошибку
import {Link} from "react-router-dom";
import {MatchesDataType} from "../../type/matchesDataInterface.ts";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import Loading from "../Loading.tsx";

const MatchCardPublic = (props: MatchesDataType) => {
    const {matchData} = props
    const {heroes, loading, error} = useTypedSelector(state => state.heroes)

    if (loading) {
        return <div className="flex w-full h-[90vh] justify-center items-center"><Loading/></div>
    }

    if (error) {
        return <h2>Sorry, can`t load information</h2>
    }

    const time:number = matchData.duration ?? 0
    const duration = {
            minutes: Math.floor(time/60).toString().padStart(2, '0'),
            seconds: (time % 60).toString().padStart(2, '0')
    }

    const getRadiantTeam = () => {
        return matchData.radiant_team.split(',')
            .map(id => <img src={`https://api.opendota.com${heroes
                .find(hero => hero.id == id).icon}`} className="w-[32px]" alt=""/>)
    }

    const getDireTeam = () => {
        return matchData.dire_team.split(',')
            .map(id => <img src={`https://api.opendota.com${heroes
                .find(hero => hero.id == id).icon}`} className="w-[32px]" alt=""/>)
    }

    const timeLeft = () => {
        const secondsLeft = Math.floor(Date.now()/1000) - (matchData.start_time + matchData.duration)
        const hours = Math.floor(secondsLeft/60/60).toString()
        const minutes = (Math.floor(secondsLeft/60) - hours).toString()
        const seconds = (secondsLeft % 60).toString()

        console.log(secondsLeft)

        return minutes + ' minutes ago'
    }

    return (
        <div className="match-card flex flex-col items-center border-2 border-[#131313] p-2
                        sm:grid sm:grid-cols-3">
            <div className="match-card__info flex flex-col items-center
                            sm:items-start">
                <Link to={`/matches/match?id=${matchData.match_id ?? ''}`}
                      className='text-blue-200'>{matchData.match_id}</Link>
                <span className="text-gray-400">{timeLeft()}</span>
            </div>
            <div className="match-card__duration flex items-center justify-center my-2">
                <p>{`${duration.minutes}:${duration.seconds}`}</p>
            </div>
            <div className="match-card__teams w-full flex-col items-center justify-between
                            grid grid-cols-2">
                <div className="match-card__teams__team radiant w-[100%]">
                    <div className="text-[#66bb6a] flex flex-col justify-center lg:flex-row lg:justify-start">{getRadiantTeam()}
                    </div>
                </div>
                <div className="match-card__teams__team dire w-[100%]">
                    <div className="text-[#66bb6a] flex flex-col items-end lg:flex-row lg:justify-end">
                        {getDireTeam()}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MatchCardPublic;