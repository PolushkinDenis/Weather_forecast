import React, { FC, useState, useEffect } from 'react'
import { WeatherState, ICurrentDays, IWeatherDays } from '../../types/weather'
import moment from 'moment'
import './WeatherSevenDaysCard.css'
import WeatherSevenDaysCardItem from '../weatherSevenDaysCardItem/WeatherSevenDaysCardItem'
import leftArrow from '../../images/left.png'
import rightArrow from '../../images/right.png'


interface WeatherSevenDaysCardState {
    weather: ICurrentDays
}

const WeatherSevenDaysCard: FC<WeatherSevenDaysCardState> = ({ weather }) => {

    const [weatherDay, setWeatherDay] = useState<IWeatherDays[]>(weather.data)
    const [weatherThreeDays, setWeatherThreeDays] = useState<IWeatherDays[]>([])
    const [currentDay, setCurrentDat] = useState(2)

    const nextDay = () => {
        if(currentDay < weatherDay.length-1){
            const newWeatherThreeDays = [...weatherThreeDays]
            newWeatherThreeDays.splice(0, 1);
            newWeatherThreeDays.push(weather.data[currentDay + 1])
            setCurrentDat(currentDay + 1)
            setWeatherThreeDays(newWeatherThreeDays)
        }
    }

    const prevDay = () => {
        if (currentDay > 2) {
            const newWeatherThreeDays = [...weatherThreeDays]
            newWeatherThreeDays.splice(2, 1);
            newWeatherThreeDays.unshift(weather.data[currentDay - 3])
            setCurrentDat(currentDay - 1)
            setWeatherThreeDays(newWeatherThreeDays)
        }
    }

    useEffect(() => {
        const firstThree = []
        for (let i = 0; i < 3; i++) {
            firstThree.push(weather.data[i])
        }
        setWeatherThreeDays(firstThree)
    }, [])

    return (
        <div className='weatherSevenDaysCard'>
            <div className='weatherSevenDaysCard_content'>
                <img className='weatherSevenDaysCard-arrow-left' onClick={prevDay} src={leftArrow}></img>
                {weatherThreeDays?.map((weather) =>
                    <WeatherSevenDaysCardItem key={weather.moonrise_ts} weather={weather} />
                )}
                <img className='weatherSevenDaysCard-arrow-right' onClick={nextDay} src={rightArrow}></img>
            </div>
        </div>
    )
}

export default WeatherSevenDaysCard