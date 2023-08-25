import {playerListInterface} from "../type/Intarface.ts";

const PlayerCard = (props: playerListInterface) => {
    const {playerData}:playerListInterface = props
    const url = `https://api.opendota.com/api/players/${playerData.account_id}`

    return (
        <>

        </>
    );
};

export default PlayerCard;