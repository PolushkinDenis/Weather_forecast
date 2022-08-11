import axios from "axios"
import { Dispatch } from "redux"
import { WeatherAction, WeatherActionTypes } from "../types/weather"


export const fetchWeather = (city: string) => {

    console.log(city)
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER})
            const responce = await axios.get('https://api.weatherbit.io/v2.0/forecast/daily?&lat=53.195873&lon=50.100193&key=a8d9f20862824f2093b9f85c8a4ef7be')
            console.log(responce)
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_SUCCESS, payload: responce.data})
        }
        catch (e) {
            console.log(e)
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_ERROR, payload: "Ошибка при загрузке погоды"})
        } 
    }
}