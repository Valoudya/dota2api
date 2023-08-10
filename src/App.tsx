import './App.css'
import Header from "./components/Header.tsx";
import RoutersJS from "./routers/Routers.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <>
            <Header/>
            <RoutersJS/>
            <Footer/>
        </>
    )
}

export default App
