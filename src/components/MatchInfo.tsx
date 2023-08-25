import {MatchesDataType} from "../type/Intarface.ts";

const MatchInfo = (props: MatchesDataType) => {

    const {matchData} = props

    const time = matchData.duration ?? 0,
        duration = {
            minutes: Math.floor(time/60).toString().padStart(2, '0'),
            seconds: (time % 60).toString().padStart(2, '0')
        }

    return (
        <div className="match-info w-full flex justify-center flex-col items-center">
            <div className="match-result min-h-[150px] w-[1000px] max-w-full items-center grid grid-cols-1
                            md:grid-cols-3">
                <div className="radiant-team text-center">
                    <p className="text-[32px] text-[#66bb6a]">
                        {matchData.radiant_win && '👑'}
                        {/* eslint-disable-next-line no-prototype-builtins */}
                        {matchData.hasOwnProperty('radiant_team') ? matchData.radiant_team?.name : 'Radiant'}
                    </p>
                </div>
                <div className="teams-score flex justify-center text-[32px] flex-col items-center">
                    <p className="space-x-2">
                        <span className="radiant-score text-[#66bb6a]">{matchData.radiant_score}</span>
                        <span>:</span>
                        <span className="dire-score text-[#bb6666]">{matchData.dire_score}</span>
                    </p>
                    <div className="duration">
                        <p className="text-[18px]">{`${duration.minutes}:${duration.seconds}`}</p>
                    </div>
                </div>
                <div className="dire-team text-center">
                    <p className="text-[32px] text-[#bb6666]">
                        {!matchData.radiant_win && '👑'}
                        {/* eslint-disable-next-line no-prototype-builtins */}
                        {matchData.hasOwnProperty('dire_team') ? matchData.dire_team?.name : 'Dire'}
                    </p>
                </div>
            </div>
            {
                matchData.replay_url && <a href={matchData.replay_url} className="px-4 py-1 border-2 border-[#202020] justify-center mt-2 rounded-full flex items-center">
                    Replay
                    <img src="../../public/download.png" alt="" className="w-[20px] ml-2"/>
                </a>
            }
        </div>
    );
};

export default MatchInfo;