import React, { FC } from 'react'
import './WeatherSevenDaysCardItem.css'
import { IWeatherDays } from '../../types/weather'

interface WeatherSevenDaysCardItemState {
    weather: IWeatherDays
}

const WeatherSevenDaysCardItem: FC<WeatherSevenDaysCardItemState> = ({weather}) => {

    return (
        <div className='weatherSevenDaysCard-item'>
            <div className='weatherSevenDaysCard-item_date'>{weather.valid_date}</div>
            <img src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}></img>
            {weather.temp > 0 ?
                (<div className='weatherSevenDaysCard-item_temp'>+{weather.temp}°</div>) :
                (<div className='weatherSevenDaysCard-item_temp'>-{weather.temp}°</div>)}
        </div>
    )

}

export default WeatherSevenDaysCardItem