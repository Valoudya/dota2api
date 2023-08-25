import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import Loading from "./Loading.tsx";
import MatchCardPro from "./MatchCardPro.tsx";

const MatchesPro = () => {
    const {loading, error, matches} = useTypedSelector(state => state.proMatches)

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <h2>Sorry, can`t load information</h2>
    }

    return (
        <>
            {matches.map((match, key) => <MatchCardPro matchData={match} key={key}/>)}
        </>
    );
};

export default MatchesPro;