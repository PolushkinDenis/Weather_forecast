import React, {Dispatch, FC, useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../action-creators/weather";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import WeatherSevenDays from "../weatherSevenDays/WeatherSevenDays";

const Weather: FC = () => {

    const dispatch: Dispatch<any> = useDispatch()
    const {loading, error, weather} = useTypedSelector(state => state.weather)
    console.log(weather)


    // useEffect(() => {
    //     const city = "Samara"
    //     dispatch(fetchWeather(city))
    // }, [])

     return (
        <div>
            <WeatherSevenDays />

        </div>

    )
}

export default Weather 