import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/reducers/mainReducer.ts";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector