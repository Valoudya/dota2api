import {HeroDataType} from "../type/Intarface.ts";

const HeroPageCard = (props: HeroDataType) => {

    const {heroData} = props

    if (!heroData) {
        return <>Failed Hero id</>
    }

    return (
        <div className="hero-card">
            <div className="hero-info flex flex-col
                            sm:flex-row">
                <img src={`https://api.opendota.com${heroData.img ?? ''}`} alt=""
                     className="rounded-[10px] w-[260px] h-[140px]"/>
                <div className="hero-main-stats ml-3 flex flex-col justify-center">
                    <h3 className='text-[32px]'>{heroData.localized_name}</h3>
                    <p>{heroData.attack_type} - {heroData.roles?.map((role, key) => <span
                        className="text-gray-400"
                        key={key}>{role} </span>)}</p>
                    <div className="attributes flex space-x-3">
                        <div className="flex items-center">
                            <div className="w-[10px] h-[10px] rounded-full bg-[#f44336]"></div>
                            <span className="mb-[3px] ml-[3px]">{heroData.base_str} + {heroData.str_gain}</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10px] h-[10px] rounded-full bg-[#39d402]"></div>
                            <span className="mb-[3px] ml-[3px]">{heroData.base_agi} + {heroData.agi_gain}</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10px] h-[10px] rounded-full bg-[#01a9f4]"></div>
                            <span className="mb-[3px] ml-[3px]">{heroData.base_int} + {heroData.int_gain}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPageCard;