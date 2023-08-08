import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header w-screen flex h-[80px] bg-[#131313] text-[#d0d0d0] items-center justify-center">
            <div className="header__menu max-w-[90%] w-[1600px] flex justify-between text-[18px]">
                <div className="header__menu__logo">
                    <Link to="/" className="p-1">Dota2 Stats</Link>
                </div>
                <div className="header__menu__nav space-x-3">
                    <Link to="/heroes" className='p-1'>Heroes</Link>
                    <Link to="/matches" className='p-1'>Matches</Link>
                    <Link to="/players" className='p-1'>Players</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;