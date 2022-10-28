import {combineReducers} from "redux"
import popup from "./popup"
import mint from "./mint"


export const rootReducer = combineReducers({
    popup,
    mint
})

export type RootState = ReturnType<typeof rootReducer>