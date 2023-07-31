import {useAxiosGet} from "../hooks/axiosGet.tsx";
import {useEffect} from "react";

const PlayerCard = (props) => {

    let link
    const {axiosData, loaded, getAxiosData} = useAxiosGet(link)

    const getPlayerData = () => {
        link = `https://api.opendota.com/api/players/${props.playerData.account_id}`
        getAxiosData()
    }

    useEffect(() => {
        props.playerData.account_id && getPlayerData()
    }, [])

    return (
        <div className="player-info grid grid-cols-5">
            <div className="player-name">{loaded && axiosData.profile.personaname}</div>
            <div className="player-lvl"></div>
            <div className="player-kill"></div>
            <div className="player-death"></div>
            <div className="player-asistance"></div>
        </div>
    );
};

export default PlayerCard;