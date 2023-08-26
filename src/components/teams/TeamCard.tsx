import {TeamDataType} from "../../type/teamsDataInterface.ts";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

// TODO: доделать страницу

interface TeamsStatState {
    matchesPlayed: number;
    matchesWinInterest: number;
    matchesLoseInterest: number;
}
const TeamCard = (props: TeamDataType) => {

    const initialState: TeamsStatState = {
        matchesPlayed: 0,
        matchesWinInterest: 0,
        matchesLoseInterest: 0
    }

    const {team} = props
    const [teamStats, setTeamStats] = useState(initialState)

    const getTeamStat = () => {
        const statistic: TeamsStatState = {
            matchesPlayed: team.wins + team.losses,
            matchesWinInterest: Math.round(100 * team.wins / (team.wins + team.losses)),
            matchesLoseInterest: Math.round(100 * team.losses / (team.wins + team.losses))
        }
        setTeamStats(statistic)
    }

    useEffect(() => {
        getTeamStat()
    }, [team])

    return (
        <div className="team-card max-w-[1200px] min-w-[100%] border-2
                        border-[#202020] grid grid-cols-1 md:grid-cols-4
                        items-center justify-items-center md:justify-items-start p-3 space-y-2">
            <div className="team-card__logo w-[50px] h-[50px] flex items-center">
                <img src={team.logo_url} alt=""/>
            </div>
            <Link to={`/teams/team?id=${team.team_id}`}
                  className="text-[18px] text-blue-200">{team.name} [{team.tag}]</Link>
            <div className="flex justify-center w-full"><span className="md:hidden">Rating: </span>{team.rating}</div>
            <div className="teamWL space-y-2 flex flex-col items-center w-full">
                <span>
                    <span className="text-[#66bb6a]">{team.wins} </span>/
                    <span className="text-[#bb6666]"> {team.losses}</span>
                </span>
                <div className="w-[150px] h-1 bg-[#202020] flex">
                    <div className={`h-1 bg-[#66bb6a]`} style={{width: teamStats.matchesWinInterest + '%'}}></div>
                    <div className={`h-1 bg-[#bb6666]`} style={{width: teamStats.matchesLoseInterest + '%'}}></div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;