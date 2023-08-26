import HeroesCard from "../components/heroes/HeroesCard.tsx";
import {useState} from "react";
import Loading from "../components/Loading.tsx";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {heroesFilter} from "../utilits/heroesFilter.tsx";

const Heroes = () => {
    const {heroes, loading, error} = useTypedSelector(state => state.heroes)
    const [activeFilter, setActiveFilter] = useState('all')
    const {filtersArray, chooseActiveFilter} = heroesFilter()

    const filteredHeroes = (filterType: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return heroes.filter(chooseActiveFilter(filtersArray, filterType))
    }

    if (loading) {
        return <div className="content w-screen flex justify-center min-h-[100vh]">
            <div className="view heroes flex flex-col w-[1600px] max-w-[90%]">
                <Loading/>
            </div>
        </div>
    }

    if (error) {
        return <h2>Sorry, can`t load information</h2>
    }

    return (
        <div className="content w-screen flex justify-center min-h-[100vh]">
            <div className="view heroes flex flex-col w-[1600px] max-w-[90%]">
                <div className="heroes__panel mt-5">
                    <h2 className='text-[42px]'>Heroes</h2>
                    <div className="heroes__panel__filter grid grid-cols-2
                                        sm:space-x-3 sm:flex">
                        {filtersArray.map((button, key) =>
                            <button onClick={() => setActiveFilter(button.name)}
                                    className={`${activeFilter == button.name ? 'border-b-[1px]' : ''} p-1`}
                                    key={key}>{button.name}</button>
                        )}
                    </div>
                </div>
                <div className="heroes__wrapper mt-5 grid grid-cols-2 gap-x-2 gap-y-2 max-w-[100%]
                    2xl:grid-cols-6
                    xl:grid-cols-5
                    lg:grid-cols-4
                    md:grid-cols-3
                    sm:grid-cols-2">
                    {filteredHeroes(activeFilter).map((hero, key) => <HeroesCard heroData={hero} key={key}/>)}
                </div>
            </div>
        </div>
    );
};

export default Heroes;