import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const TestingRedux = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)

    const addCash = () => {
        dispatch({type: "ADD_CASH", payload: 5})
    }

    return (
        <div>
            {cash}
            <button onClick={() => addCash()}>Прибавить</button>
            <button>Убавить</button>
        </div>
    );
};

export default TestingRedux;