const TeamSample = () => {
    return (
        <div className="team-card max-w-[1200px] min-w-[100%] border-2 border-[#202020]
                        hidden md:grid grid-cols-1
                        md:grid-cols-4 items-center
                        pl-2 space-y-2 md:space-y-0">
            <div className="team-card__logo w-[50px] h-[50px] flex items-center">
                <span>Logo</span>
            </div>
            <span>Team name</span>
            <div className="flex justify-center"><span>Rating:</span></div>
            <div className="teamWL space-y-2 flex flex-col items-center">
                Win/Lose
            </div>
        </div>
    );
};

export default TeamSample;