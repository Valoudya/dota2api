import {useAxiosGet} from "../hooks/axiosGet.tsx";
import {useEffect} from "react";
import MatchInfo from "../components/MatchInfo.tsx";

const MatchPage = () => {

    const url = `https://api.opendota.com/api/matches/${Object.fromEntries(new URL(document.location).searchParams).id}`
    const {axiosData, loaded, getAxiosData} = useAxiosGet(url)

    useEffect(() => {
        getAxiosData()
    }, [])

    return (
        <div className="content w-screen flex justify-center flex-col items-center">
            {loaded ?
                <div className="view matches flex flex-col space-y-2 w-[1600px] max-w-[90%] mt-5">
                    <h2 className='text-[42px]'>Match: {axiosData.match_id}</h2>
                    <MatchInfo matchData={axiosData}/>
                </div> : 'Loading'}
        </div>
    );
};

export default MatchPage;