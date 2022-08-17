import React, { FC } from 'react'
import './WeatherForecastCard.css'
import { ParametersState } from '../../types/parameters';
import { ICurrentDays } from '../../types/weather';
import EmptyWeather from '../emptyWeather/EmptyWeather';
import WeatherSevenDaysCard from '../weatherSevenDaysCard.jsx/WeatherSevenDaysCard';

interface WeatherForecastCardState {
    title: string;
    selector: React.ReactNode;
    inputDate?: React.ReactNode;
    parameters: ParametersState;
    weatherPast?: ICurrentDays;
    weather7Days?: ICurrentDays;
    weatherSevenDaysCard?: React.ReactNode;
}

const WeatherForecastCard: FC<WeatherForecastCardState> = (props) => {

    return (
        <div className='weatherForecastCard-main'>
            <div className='weatherForecastCard-selector'>
                <div className="weatherForecastCard-selector_text">{props.title}</div>
                <div className='weatherForecastCard-selector_inputs'>
                    <div>{props.selector}</div>
                    <div>{props.inputDate}</div>
                </div>
            </div>
            <div>
                {props.weather7Days?.data ? (<WeatherSevenDaysCard weather={props.weather7Days} />) : (
                    <EmptyWeather />
                )}
            </div>
        </div>
    )
}

export default WeatherForecastCard