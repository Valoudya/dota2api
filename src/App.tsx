import './App.css'
import Header from "./components/Header.tsx";
import RoutersJS from "./routers/Routers.tsx";
import Footer from "./components/Footer.tsx";
import {useEffect} from "react";
import {fetchHeroes} from "./store/action-creators/heroes.ts";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchHeroes())
    }, [])

    return (
        <>
            <Header/>
            <RoutersJS/>
            <Footer/>
        </>
    )
}

export default App
