import {Link} from 'react-router-dom'
import {useEffect} from "react";

//TODO: появление хедера при прокрутки вверх
const Header = () => {

    let scrollState = 0
    const getWindowPos = () => {
        if (scrollState >= window.scrollY) {
            scrollState = window.scrollY
            return document.getElementById('header').style.marginTop = '0'
        }
        document.getElementById('header').style.marginTop = '-80px'
        scrollState = window.scrollY
    }

    useEffect(() => {
        window.addEventListener('scroll', () => getWindowPos())
    }, [])

    return (
        <header className="header z-[100] duration-300 w-screen top-0 flex h-[80px] bg-[#131313] text-[#d0d0d0] items-center justify-center"
                id="header">
            <div className="header__menu max-w-[90%] w-[1600px] flex flex-col justify-between text-[18px]
                            sm:flex-row">
                <div className="header__menu__logo flex items-center justify-center">
                    <Link to="/" className="p-1">Dota2 Stats</Link>
                </div>
                <div className="header__menu__nav
                                space-x-3
                                flex
                                items-center
                                justify-center">
                    <Link to="/heroes" className='p-1'>Heroes</Link>
                    <Link to="/matches" className='p-1'>Matches</Link>
                    <Link to="/players" className='p-1'>Players</Link>
                    <Link to="/teams" className='p-1'>Teams</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;