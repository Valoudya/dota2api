import {Route, Routes} from "react-router-dom";
import MainPage from "../views/MainPage.tsx";
import Players from "../views/Players.tsx";
import NotFound from "../views/NotFound.tsx";
import Matches from "../views/Matches.tsx";
import Teams from "../views/Teams.tsx";
import Heroes from "../views/Heroes.tsx";
import HeroPage from "../views/HeroPage.tsx";
import MatchPage from "../views/MatchPage.tsx";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/*" element={<NotFound/>}/>
            <Route path="/players" element={<Players/>}/>
            <Route path="/matches" element={<Matches/>}/>
            <Route path="/teams" element={<Teams/>}/>
            <Route path="/heroes" element={<Heroes/>}/>
            <Route path="/heroes/hero" element={<HeroPage/>}/>
            <Route path="/matches/match" element={<MatchPage/>}/>
        </Routes>
    );
};

export default Routers;