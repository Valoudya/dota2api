// @ts-nocheck TODO: исправить ошибку
import {useEffect, useState} from 'react';
import MatchesPro from "../components/MatchesPro.tsx";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchPublicMatches} from "../store/action-creators/publicMatches.ts";
import {fetchProMatches} from "../store/action-creators/proMatches.ts";
import MatchesPublic from "../components/MatchesPublic.tsx";

const Matches = () => {

    const dispatch = useDispatch()
    const [isProMatches, setIsProMatches] = useState(true)
    const [searchingMatch, setSearchingMatch] = useState(0)

    useEffect(() => {
        dispatch(fetchPublicMatches())
        dispatch(fetchProMatches())
    }, [])

    return (
        <div className="content w-screen flex items-center flex-col min-h-[100vh]">
            <div className="view matches flex flex-col w-[1600px] space-y-2 max-w-[90%] mt-5">
                <h2 className='text-[42px]'>Matches</h2>
                <div className="search-match-container flex">
                    <input type="text"
                           className="flex items-center pl-5 py-2 bg-[#202020] outline-none rounded-full"
                           placeholder="Search match"
                           onChange={(e: any) => setSearchingMatch(e.currentTarget.value - 0)}/>
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
                {isProMatches ? <MatchesPro/> : <MatchesPublic/>}
            </div>
        </div>
    );
};

export default Matches;