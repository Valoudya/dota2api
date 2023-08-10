import {useEffect, useState} from 'react';
import {useAxiosGet} from "../hooks/axiosGet.tsx";
import MatchCardPro from "../components/MatchCardPro.tsx";
import MatchCardPublic from "../components/MatchCardPublic.tsx";
import {Link} from "react-router-dom";
import Loading from "../components/Loading.tsx";

const Matches = () => {

    const proMatches = 'https://api.opendota.com/api/proMatches'
    const publicMatches = 'https://api.opendota.com/api/publicMatches'
    const [isProMatches, setIsProMatches] = useState(true)
    const {axiosData, loaded, getAxiosData} = useAxiosGet(isProMatches ? proMatches : publicMatches)

    const [searchingMatch, setSearchingMatch] = useState(0)

    useEffect(() => {
        getAxiosData()
    }, [isProMatches])

    return (
        <div className="content w-screen flex items-center flex-col min-h-[100vh]">
            <div className="view matches flex flex-col w-[1600px] space-y-2 max-w-[90%] mt-5">
                <h2 className='text-[42px]'>Matches</h2>
                <div className="search-match-container flex">
                    <input type="text"
                           className="flex items-center pl-5 py-2 bg-[#202020] outline-none rounded-full"
                           placeholder="Search match"
                           onChange={e => setSearchingMatch(e.currentTarget.value - 0)}/>
                    <Link to={`/matches/match?id=${searchingMatch}`}
                        className="bg-[#303030] p-3 justify-center items-center flex rounded-full ml-[-35px]">
                        <img src="../../public/search-interface-symbol.png"
                             alt=""
                             className="w-[15px]"/>
                    </Link>
                </div>
                <div className="category-changer flex w-[100%] justify-start space-x-2 items-start">
                    <button className={`py-1 px-2 ${isProMatches && 'border-b-2'}`}
                            onClick={() => setIsProMatches(true)}>Pro Matches
                    </button>
                    <button className={`py-1 px-2 ${!isProMatches && 'border-b-2'}`}
                            onClick={() => setIsProMatches(false)}>Public Matches
                    </button>
                </div>
                {loaded ? '' : <Loading/>}
                {loaded && isProMatches ? axiosData.map((match, key) => <MatchCardPro matchData={match} key={key}/>) : ''}
                {loaded && !isProMatches ? axiosData.map((match, key) => <MatchCardPublic matchData={match} key={key}/>) : ''}
            </div>
        </div>
    );
};

export default Matches;