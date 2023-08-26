import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import Loading from "../Loading.tsx";
import MatchCardPublic from "./MatchCardPublic.tsx";

const MatchesPublic = () => {

    const {loading, error, matches} = useTypedSelector(state => state.publicMatches)

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <h2>Sorry, can`t load information</h2>
    }

    return (
        <>
            {matches.map((match, key) => <MatchCardPublic matchData={match} key={key}/>)}
        </>
    );
};

export default MatchesPublic;