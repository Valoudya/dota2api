const MatchesCardSample = () => {
    return (
        <div className="match-card flex flex-col items-center border-2 border-[#131313] p-2
                        sm:grid sm:grid-cols-3">
            <div className="match-card__info flex flex-col items-center
                            sm:items-start">
                MatchID
            </div>
            <div className="match-card__duration flex items-center justify-center my-2">
                <p>MatchDuration</p>
            </div>
            <div className="match-card__teams w-full flex-col items-center justify-between
                            grid grid-cols-2">
                <div className="match-card__teams__team radiant w-[100%]">
                    <div className="text-[#66bb6a]">Radiant
                    </div>
                </div>
                <div className="match-card__teams__team dire w-[100%]">
                    <div className="text-[#bb6666] text-end">
                        Dire
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchesCardSample;