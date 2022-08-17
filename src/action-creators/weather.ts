import axios from "axios"
import { Dispatch } from "redux"
import { WeatherAction, WeatherActionTypes } from "../types/weather"


export const fetchWeather7Days = (city: string[]) => {

    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_7DAYS})
            const responce = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${city[0]}&lon=${city[1]}&key=a8d9f20862824f2093b9f85c8a4ef7be`)
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_7DAYS_SUCCESS, payload: responce.data})
        }
        catch (e) {
            console.log(e)
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_ERROR, payload: "Ошибка при загрузке погоды"})
        } 
    }
}


export const fetchWeatherPast = (city: string[], date: string) => {

    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_PAST})
            const responce = await axios.get(`https://api.weatherbit.io/v2.0/history/daily?&lat=${city[0]}&lon=${city[1]}&start_date=${date}&end_date=${date}&key=a8d9f20862824f2093b9f85c8a4ef7be`)
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_PAST_SUCCESS, payload: responce.data})
        }
        catch (e) {
            console.log(e)
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_ERROR, payload: "Ошибка при загрузке погоды"})
        } 
    }
}