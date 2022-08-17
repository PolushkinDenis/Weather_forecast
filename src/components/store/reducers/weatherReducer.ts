import { WeatherState, WeatherActionTypes, WeatherAction } from "../../../types/weather"

const initialState: WeatherState = {
    weather7Days: [],
    weatherPast: [],
    loading: false,
    error: null
}

export const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {

    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER:
            return { loading: true, error: null, weather7Days: state.weather7Days, weatherPast: state.weatherPast }
        case WeatherActionTypes.FETCH_WEATHER_7DAYS_SUCCESS:
            return { loading: false, error: null, weather7Days: action.payload, weatherPast: state.weatherPast }
        case WeatherActionTypes.FETCH_WEATHER_PAST_SUCCESS:
            return { loading: false, error: null, weather7Days: state.weather7Days, weatherPast: action.payload }
        case WeatherActionTypes.FETCH_WEATHER_ERROR:
            return { loading: false, error: action.payload, weather7Days: state.weather7Days, weatherPast: state.weatherPast }
        default:
            return state
    }
}