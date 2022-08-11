import { WeatherState, WeatherActionTypes, WeatherAction } from "../../../types/weather"

// const responce = await axios('https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=a8d9f20862824f2093b9f85c8a4ef7be&include=minutely')
//const responce = await axios.get<Weather[]>('https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=a8d9f20862824f2093b9f85c8a4ef7be')

const initialState: WeatherState = {
    weather: [],
    loading: false,
    error: null
}

export const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {

    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER:
            return { loading: true, error: null, weather: [] }
        case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
            return { loading: false, error: null, weather: action.payload }
        case WeatherActionTypes.FETCH_WEATHER_ERROR:
            return { loading: false, error: action.payload, weather: [] }
        default:
            return state
    } 
}