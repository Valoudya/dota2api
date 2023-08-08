import {useState} from "react";
import {Link} from "react-router-dom";

const Players = () => {

    const [searchingPlayer, setSearchingPlayer] = useState(0)

    return (
        <div className="content w-screen flex justify-center flex-col items-center">
            <div className="view player flex flex-col w-[1600px] space-y-2 max-w-[90%]">
                <div className="player_panel mt-5">
                    <h2 className='text-[42px]'>Players</h2>
                    <div className="search-player-container flex">
                        <input type="text"
                               className="flex items-center pl-5 py-2 bg-[#202020] outline-none rounded-full"
                               placeholder="Search player"
                               onChange={e => setSearchingPlayer(e.currentTarget.value - 0)}/>
                        <Link to={`/players/player?id=${searchingPlayer}`}
                              className="bg-[#303030] p-3 justify-center items-center flex rounded-full ml-[-35px]">
                            <img src="../../public/search-interface-symbol.png"
                                 alt=""
                                 className="w-[15px]"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Players;