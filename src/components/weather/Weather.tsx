import React, { FC, Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import WeatherForecastCard from "../weatherForecastCard/WeatherForecastCard";
import Selector from "../UI/selector/Selector";
import InputDate from "../UI/inputDate/InputDate";
import { ParametersTypes } from "../../types/parameters";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchWeatherPast, fetchWeather7Days } from "../../action-creators/weather";
import './Weather.css'

const Weather: FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const parameters = useTypedSelector(state => state.parameters)
    const { weather7Days, weatherPast } = useTypedSelector(state => state.weather)

    useEffect(() => {
        console.log("DDD")
        if (parameters.city7Days[0].length > 0) {
            console.log("dfff")
            dispatch(fetchWeather7Days(parameters.city7Days))
        }
    }, [parameters.city7Days])

    useEffect(() => {
        if (parameters.cityPast.length > 0 && parameters.date.length > 0) {
            dispatch(fetchWeatherPast(parameters.cityPast, parameters.date))
        }
    }, [parameters.date, parameters.cityPast])

    console.log(weather7Days)

    return (
        <div className="weather">
            <WeatherForecastCard
                title={'7 Days Forecast'}
                selector={<Selector type={ParametersTypes.ADD_CITY_7DAYS} />}
                parameters={parameters}
                weather7Days={weather7Days}
            />
            <WeatherForecastCard
                title={'Forecast for a Date in the Past'}
                selector={<Selector type={ParametersTypes.ADD_CITY_PAST} />}
                inputDate={<InputDate />}
                parameters={parameters}
                weatherPast={weatherPast}
            />
        </div>
    )
}

export default Weather 