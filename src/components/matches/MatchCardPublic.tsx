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
                .find(hero => hero.id == id).icon}`} alt=""/>)
    }

    const getDireTeam = () => {
        return matchData.dire_team.split(',')
            .map(id => <img src={`https://api.opendota.com${heroes
                .find(hero => hero.id == id).icon}`} alt=""/>)
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
                            lg:grid lg:grid-cols-2">
                <div className="match-card__teams__team radiant w-[100%]">
                    <div className="text-[#66bb6a] flex justify-center">{getRadiantTeam()}
                    </div>
                </div>
                <div className="match-card__teams__team dire w-[100%]">
                    <div className="text-[#66bb6a] flex justify-center">
                        {getDireTeam()}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MatchCardPublic;