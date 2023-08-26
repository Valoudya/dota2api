import {useFetchTeams} from "../hooks/fetchTeams.ts";
import {useEffect, useState} from "react";
import Loading from "../components/Loading.tsx";
import TeamCard from "../components/teams/TeamCard.tsx";
import TeamSample from "../components/teams/TeamSample.tsx";
import SearchPanel from "../components/SearchPanel.tsx";

const Teams = () => {

    const [currentPage, setCurrentPage] = useState(0)
    const {fetchTeams, teamsData} = useFetchTeams()
    const {teams, teamsLoaded, error} = teamsData
    useEffect(() => {
        fetchTeams()
    }, [])

    const teamsPagination = (currentPage: number) => {
        return teams.slice(currentPage * 50, currentPage * 50 + 50)
    }
    const changePage = (page: number) => {
        setCurrentPage(page)
    }

    if (!teamsLoaded) {
        return <div className="flex w-full h-[90vh] justify-center items-center"><Loading/></div>
    }

    if (error) {
        return <h3>Sorry can`t load information</h3>
    }

    const pageQuantity = () => {
        return [...Array(teams.length / 50).keys()]
    }

    return (
        <div className="teams__page content w-screen flex justify-center min-h-[100vh]">
            <div className="teams view flex flex-col w-[1600px] max-w-[90%] items-center">
                <div className="teams-container w-[100%] space-y-2">
                    <h2 className='text-[42px] mt-5 text-start'>Teams</h2>
                    <SearchPanel route="teams/team" placeholder={'Search team'}/>
                    <TeamSample/>
                    {teamsPagination(currentPage).map((team, key) => <TeamCard team={team} key={key}/>)}
                </div>
                <div className="paginationr mt-5">
                    {pageQuantity().map((page, key) =>
                        <button onClick={() => changePage(page)}
                                key={key}
                                className={`px-2 ${page == currentPage ? 'text-blue-300' : ''}`}>{page + 1}</button>)}
                </div>
            </div>
        </div>
    );
};

export default Teams;