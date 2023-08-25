import {useState} from "react";
import HeroPageCard from "../components/HeroPageCard.tsx";
import NextPrevHero from "../components/NextPrevHero.tsx";
import HeroPageStats from "../components/HeroPageStats.tsx";
import Loading from "../components/Loading.tsx";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";

const HeroPage = () => {
    const {heroes, loading, error} = useTypedSelector(state => state.heroes)
    const heroId:string = Object.fromEntries(new URL(document.location).searchParams).id
    const [currentPage, setCurrentPage] = useState(Number(heroId))

    if (loading) {
        return <div className="content w-screen flex justify-center min-h-[100vh]">
            <div className="view heroes flex flex-col w-[1600px] max-w-[90%]">
                <Loading/>
            </div>
        </div>
    }

    if (error) {
        return <h2>Can't load Hero information</h2>
    }

    const pageChanger = (newHeroId:number)  => {
        setCurrentPage(newHeroId)
    }

    const getPrevHeroId = () => {
        const prevHero = heroes.find(item => item.id == currentPage)

        if (heroes.indexOf(prevHero) - 1 < 0) {
            return heroes.length - 1
        }
        return (heroes.indexOf(prevHero)) - 1
    }

    const getNextHeroId = () => {
        const nextHero = heroes.find(item => item.id == currentPage)

        if (heroes.indexOf(nextHero) + 1 >= heroes.length) {
            return 0
        }
        return (heroes.indexOf(nextHero)) + 1
    }

    return (
        <div className="content w-screen flex justify-center">
            <div className="hero view flex w-[1600px] max-w-[90%] mt-5 flex-col">
                    <HeroPageCard heroData={heroes.find(item => item.id == currentPage)}/>
                    <HeroPageStats heroData={(heroes.find(item => item.id == currentPage))}/>
                    <NextPrevHero heroesData={heroes}
                                  heroId={heroId}
                                  heroData={(heroes.find(item => item.id == currentPage))}
                                  prevHeroId={getPrevHeroId()}
                                  nextHeroId={getNextHeroId()}
                                  pageChanger={pageChanger}/>
            </div>
        </div>
    );
};

export default HeroPage;