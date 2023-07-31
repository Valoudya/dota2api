import {Link} from "react-router-dom";
import {heroesInterface} from "../interfaces/heroesIntarface.ts";

const HeroesCard = (props: heroesInterface) => {

    const {heroData}: heroesInterface = props

    const link = 'https://api.opendota.com'

    return (
        <Link className="heroes-card w-[100%] h-[140px] rounded-[10px] relative"
              to={`/heroes/hero?id=${heroData.id}`}
              style={
                {backgroundImage: `url(${link + heroData.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}>
            <div className="heroes-card__info absolute bottom-0 px-2 py-1 bg-[#131313] rounded">
                <p>{heroData.localized_name}</p>
            </div>
        </Link>
    );
};

export default HeroesCard;