// @ts-nocheck TODO: исправить ошибку
import {useAxiosGet} from "../hooks/axiosGet.tsx";
import {useEffect} from "react";
import MatchInfo from "../components/matches/MatchInfo.tsx";
import Loading from "../components/Loading.tsx";
import MatchesTeamCard from "../components/matches/MatchesTeamCard.tsx";

const MatchPage = () => {

    const url = `https://api.opendota.com/api/matches/${Object.fromEntries(new URL(document.location).searchParams).id}`
    const {axiosData, loaded, getAxiosData, axiosError} = useAxiosGet(url)

    useEffect(() => {
        getAxiosData()
    }, [])

    if (axiosError) {
        return <h3>The match doesn't exist or failed to download data</h3>
    }

    return (
        <div className="content w-screen flex flex-col items-center">
            {loaded ?
                <div className="view matches flex flex-col space-y-2 w-[1600px] max-w-[90%] mt-5">
                    <h2 className='text-[42px]'>Match: {axiosData.match_id}</h2>
                    <MatchInfo matchData={axiosData}/>
                    <MatchesTeamCard playersData={axiosData.players}/>
                </div> : <Loading/>}
        </div>
    );
};

export default MatchPage;