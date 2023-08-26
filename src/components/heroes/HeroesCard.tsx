import {Link} from "react-router-dom";
import {HeroDataType} from "../../type/playersDataInterface.ts";

const HeroesCard = (props: HeroDataType) => {

    const {heroData} = props

    const link = 'https://api.opendota.com'

    return (
        <Link className="heroes-card w-[100%] h-[140px] rounded-[10px] relative"
              to={`/heroes/hero?id=${heroData.id ?? ''}`}
              style={
                {backgroundImage: `url(${link}${heroData.img ?? ''})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}>
            <div className="cover bg-[rgba(32,32,32,0.5)] duration-300 w-[100%] h-[100%] hover:bg-[rgba(0,0,0,0)] rounded-[10px]">
                <div className="heroes-card__info absolute bottom-0 px-2 py-1 bg-[#131313] rounded">
                    <p>{heroData.localized_name}</p>
                </div>
            </div>
        </Link>
    );
};

export default HeroesCard;