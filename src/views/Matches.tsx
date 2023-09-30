// @ts-nocheck TODO: исправить ошибку
import {useEffect, useState} from 'react';
import MatchesPro from "../components/matches/MatchesPro.tsx";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchPublicMatches} from "../store/action-creators/publicMatches.ts";
import {fetchProMatches} from "../store/action-creators/proMatches.ts";
import MatchesPublic from "../components/matches/MatchesPublic.tsx";
import SearchPanel from "../components/SearchPanel.tsx";
import MatchesCardSample from "../components/matches/MatchesCardSample.tsx";

const Matches = () => {

    const dispatch = useDispatch()
    const [isProMatches, setIsProMatches] = useState(true)

    useEffect(() => {
        dispatch(fetchPublicMatches())
        dispatch(fetchProMatches())
    }, [])

    return (
        <div className="content w-screen flex items-center flex-col min-h-[100vh]">
            <div className="view matches flex flex-col w-[1600px] space-y-2 max-w-[90%] mt-5">
                <h2 className='text-[42px]'>Matches</h2>
                <SearchPanel route="match" placeholder="Search match"/>
                <div className="category-changer flex w-[100%] justify-start space-x-2 items-start">
                    <button className={`py-1 px-2 ${isProMatches && 'border-b-2'}`}
                            onClick={() => setIsProMatches(true)}>Pro Matches
                    </button>
                    <button className={`py-1 px-2 ${!isProMatches && 'border-b-2'}`}
                            onClick={() => setIsProMatches(false)}>Public Matches
                    </button>
                </div>
                <MatchesCardSample/>
                {isProMatches ? <MatchesPro/> : <MatchesPublic/>}
            </div>
        </div>
    );
};

export default Matches;