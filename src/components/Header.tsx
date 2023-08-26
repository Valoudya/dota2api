import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="header w-screen flex h-[80px] bg-[#131313] text-[#d0d0d0] items-center justify-center">
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