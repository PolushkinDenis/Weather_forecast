import axios from "axios"
import { Dispatch } from "redux"
import { WeatherAction, WeatherActionTypes } from "../types/weather"


export const fetchWeather = (city: string[]) => {

    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER})
            const responce = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${city[0]}&lon=${city[1]}&key=a8d9f20862824f2093b9f85c8a4ef7be`)
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_SUCCESS, payload: responce.data})
        }
        catch (e) {
            console.log(e)
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_ERROR, payload: "Ошибка при загрузке погоды"})
        } 
    }
}