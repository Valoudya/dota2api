import HeroesCard from "../components/HeroesCard.tsx";
import {useAxiosGet} from "../hooks/axiosGet.tsx";
import {useHeroesFilter} from "../hooks/heroesFilter.tsx";
import {useState} from "react";
import Loading from "../components/Loading.tsx";

const Heroes = () => {

    const link = 'https://api.opendota.com/api/heroStats'
    const { axiosData, loaded, setAxiosData, axiosStableState } = useAxiosGet(link)
    const { filtersArray } = useHeroesFilter()
    const [filterActive, setFilterActive] = useState('all')
    const filterHeroes = (filterType) => {
        setAxiosData(axiosStableState.filter(filterType))
    }

    return (
            <div className="content w-screen flex justify-center min-h-[100vh]">
                <div className="view heroes flex flex-col w-[1600px] max-w-[90%]">
                    <div className="heroes__panel mt-5">
                        <h2 className='text-[42px]'>Heroes</h2>
                        <div className="heroes__panel__filter grid grid-cols-2
                                        sm:space-x-3 sm:flex">
                            {filtersArray.map((filter, key ) =>
                                <button className={`px-3 py-1 text-[#d0d0d0] ${filterActive == filter.name ? 'border-b-2' : ''}`}
                                        key={key}
                                        onClick={() => {
                                            filterHeroes(filter.filterType)
                                            setFilterActive(filter.name)
                                        }}
                                >{
                                    filter.name}
                                </button>)}
                        </div>
                    </div>
                    <div className="heroes__wrapper mt-5 grid grid-cols-2 gap-x-2 gap-y-2 max-w-[100%]
                    2xl:grid-cols-6
                    xl:grid-cols-5
                    lg:grid-cols-4
                    md:grid-cols-3
                    sm:grid-cols-2">
                        {loaded ? axiosData.map((hero, key) => <HeroesCard heroData={hero} key={key}/>) : <Loading/>}
                    </div>
                </div>
            </div>
    );
};

export default Heroes;