import {useEffect, useState} from "react";
import axios from "axios";

export function useAxiosGet(url: string) {

    const [axiosData, setAxiosData] = useState([])
    const [loaded, setLoaded] = useState(false)

    const getAxiosData = () => {
        setLoaded(false)
        axios({
            method: 'get',
            url: url
        }).then(response => {
                setAxiosData(response.data)
                setLoaded(true)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getAxiosData()
    }, [])

    return {axiosData, loaded, getAxiosData}
}