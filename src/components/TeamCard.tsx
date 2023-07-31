import PlayerCard from "./PlayerCard.tsx";

const TeamCard = (props) => {
    return (
        <div className='team-info w-full'>
            {props.teamData.map(player => <PlayerCard playerData={player}/>)}
        </div>
    );
};

export default TeamCard;