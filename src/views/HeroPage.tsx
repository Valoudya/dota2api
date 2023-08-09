import {useAxiosGet} from "../hooks/axiosGet.tsx";
import HeroPageCard from "../components/HeroPageCard.tsx";
import NextPrevHero from "../components/NextPrevHero.tsx";
import {useState} from "react";
import HeroPageStats from "../components/HeroPageStats.tsx";

let heroId
const HeroPage = () => {
    heroId = Object.fromEntries(new URL(document.location).searchParams).id
    const link = `https://api.opendota.com/api/heroStats`
    const { axiosData, loaded } = useAxiosGet(link)
    const [currentPage, setCurrentPage] = useState(heroId)

    const pageChanger = (newHeroId) => {
        setCurrentPage(newHeroId)
    }

    const getPrevHeroId = () => {
        if (((axiosData.indexOf(axiosData.find(item => item.id == currentPage))) - 1 < 0)) {
            return axiosData.length - 1
        }
        return (axiosData.indexOf(axiosData.find(item => item.id == currentPage))) - 1
    }

    const getNextHeroId = () => {
        if (((axiosData.indexOf(axiosData.find(item => item.id == currentPage))) + 1 >= axiosData.length)) {
            return 0
        }
        return (axiosData.indexOf(axiosData.find(item => item.id == currentPage))) + 1
    }

    return (
        <div className="content w-screen flex justify-center">
            <div className="hero view flex w-[1600px] max-w-[90%] mt-5 flex-col">
                {loaded ? <HeroPageCard heroData={(axiosData.find(item => item.id == currentPage))}/> : 'Loading'}
                {loaded ? <HeroPageStats heroData={(axiosData.find(item => item.id == currentPage))}/> : ''}
                {loaded ? <NextPrevHero heroesData={axiosData}
                                        heroId={heroId}
                                        heroData={(axiosData.find(item => item.id == currentPage))}
                                        prevHeroId={getPrevHeroId()}
                                        nextHeroId={getNextHeroId()}
                                        pageChanger={pageChanger}
                /> : ''}
            </div>
        </div>
    );
};

export default HeroPage;