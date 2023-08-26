import {useState} from "react";
import axios from "axios";
import {TeamsState} from "../type/teamsDataInterface.ts";

export const useFetchTeams = () => {

    const initialState:TeamsState = {
        teams: [],
        teamsLoaded: false,
        error: null
    }

    const [teamsData, setTeamsData] = useState(initialState)
    const fetchTeams = () => {
        axios({
            method: "get",
            url: 'https://api.opendota.com/api/teams'
        })
            .then(response => {
                setTeamsData({
                    teams: response.data,
                    teamsLoaded: true,
                    error: null
                })
            })
            .catch((error) => {
                console.log(error)
                setTeamsData({
                    teams: [],
                    teamsLoaded: true,
                    error: true
                })
            })
    }

    return {teamsData, fetchTeams}
}