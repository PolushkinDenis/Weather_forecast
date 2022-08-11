import React, { Dispatch, FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import './WeatherSevenDays.css'
import { fetchWeather } from '../../action-creators/weather'
import WeatherSevenDaysCard from "../weatherSevenDaysCard.jsx/WeatherSevenDaysCard";
import imptyImg from '../../images/empty.png'

const WeatherSevenDays = () => {

    const dispatch: Dispatch<any> = useDispatch()
    const { loading, error, weather } = useTypedSelector(state => state.weather)
    console.log(weather)
    const [selectCity, setSelectCity] = useState('')

    const cityData = [
        { city: 'Samara', lat: '53.195873', lon: '50.100193' },
        { city: 'Toliatty', lat: '53.507836', lon: '49.420393' },
        { city: 'Saratov', lat: '51.533557', lon: '46.034257' },
        { city: 'Kazan', lat: '55.796127', lon: '49.106405' },
        { city: 'Krasnodar', lat: '45.035470', lon: '38.975313' },
    ]

    const fetchWeathers = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectCity(e.target.value)
        dispatch(fetchWeather(e.target.value))
    }

    return (
        <div className='weatherSevenDays-main'>
            <div className='weatherSevenDays-selector'>
                <div className="weatherSevenDays-selector_text">7 Days Forecast</div>
                <select value={selectCity} onChange={e => fetchWeathers(e)}>
                    <option value={''} disabled>Select city</option>
                    {cityData.map((city) =>
                        <option key={city.city}>{city.city}</option>
                    )}
                </select>
            </div>
            <div>
                { weather.data?.length > 0 ? (<WeatherSevenDaysCard weather={weather}/>) : (
                    <div className="weatherSevenDays-empty">
                        <img src={imptyImg}></img>
                        <div className="weatherSevenDays-empty_text">Fill in all the fields and the weather will be displayed</div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default WeatherSevenDays