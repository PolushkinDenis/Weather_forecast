import { combineReducers } from "redux";
import { parametersReducer } from "./parametersReducer";
import { weatherReducer } from "./weatherReducer";

export const rootReducer = combineReducers({
    weather: weatherReducer,
    parameters: parametersReducer,
})


export type RootState = ReturnType<typeof rootReducer>