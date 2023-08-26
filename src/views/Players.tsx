import SearchPanel from "../components/SearchPanel.tsx";

const Players = () => {

    return (
        <div className="content w-screen flex justify-center flex-col items-center">
            <div className="view player flex flex-col w-[1600px] max-w-[90%]">
                <div className="player_panel mt-5 space-y-2">
                    <h2 className='text-[42px]'>Players</h2>
                    <SearchPanel route="players/player" placeholder="Search player"/>
                </div>
            </div>
        </div>
    );
};

export default Players;