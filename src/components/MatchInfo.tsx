import TeamCard from "./TeamCard.tsx";

const MatchInfo = (props) => {

    let time = props.matchData.duration,
        duration = {
            minutes: Math.floor(time/60).toString().padStart(2, '0'),
            seconds: (time % 60).toString().padStart(2, '0')
        }

    return (
        <div className="match-info w-full flex justify-center flex-col items-center">
            <div className="match-result h-[150px] w-[1000px] max-w-full items-center grid grid-cols-3">
                <div className="radiant-team">
                    <p className="text-[32px] text-[#66bb6a]">
                        {props.matchData.radiant_win && '👑'}
                        {props.matchData.radiant_team_id ?
                            props.matchData.radiant_team.name : 'Radiant'}
                    </p>
                </div>
                <div className="teams-score flex justify-center text-[32px] flex-col items-center">
                    <p className="space-x-2">
                        <span className="radiant-score text-[#66bb6a]">{props.matchData.radiant_score}</span>
                        <span>:</span>
                        <span className="dire-score text-[#bb6666]">{props.matchData.dire_score}</span>
                    </p>
                    <div className="duration">
                        <p className="text-[18px]">{`${duration.minutes}:${duration.seconds}`}</p>
                    </div>
                </div>
                <div className="dire-team flex justify-end">
                    <p className="text-[32px] text-[#bb6666]">
                        {!props.matchData.radiant_win && '👑'}
                        {props.matchData.dire_team_id ?
                            props.matchData.dire_team.name : 'Dire'}
                    </p>
                </div>
            </div>
            {
                props.matchData.replay_url && <a href={props.matchData.replay_url} className="px-4 py-1 border-2 border-[#202020] justify-center mt-2 rounded-full flex items-center">
                    Replay
                    <img src="../../public/download.png" alt="" className="w-[20px] ml-2"/>
                </a>
            }
            <div className="teams w-full">
                <TeamCard teamData={props.matchData.players.slice(0, 5)}/>
                <TeamCard teamData={props.matchData.players.slice(5, 10)}/>
            </div>
        </div>
    );
};

export default MatchInfo;