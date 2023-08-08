import {heroesInterface} from "../interfaces/Intarface.ts";
import {Link} from "react-router-dom";

const NextPrevHero = (props: heroesInterface) => {
    const {prevHeroId, heroesData, pageChanger, nextHeroId} = props
    return (
        <div className="nav-menu flex flex-col mt-5 space-y-2">
            <Link to={`/heroes/hero?id=${heroesData[prevHeroId].id}`}
                  onClick={() => { pageChanger(heroesData[prevHeroId].id)}}
                  className="px-2 py-1 border-[#202020] border-[1px] max-w-[260px] flex space-x-2"
            >
                <img src={`https://api.opendota.com${heroesData[prevHeroId].icon}`}
                     alt=""
                     className="w-[30px] h-[30px]"
                />
                <span>{heroesData[prevHeroId].localized_name}</span>
            </Link>
            <Link to={`/heroes/hero?id=${heroesData[nextHeroId].id}`}
                  onClick={() => {pageChanger(heroesData[nextHeroId].id)}}
                  className="px-2 py-1 border-[#202020] border-[1px] max-w-[260px] flex space-x-2"
            >
                <img src={`https://api.opendota.com${heroesData[nextHeroId].icon}`}
                     alt=""
                     className="w-[30px] h-[30px]"
                />
                <span>{heroesData[nextHeroId].localized_name}</span>
            </Link>
        </div>
    );
};

export default NextPrevHero;