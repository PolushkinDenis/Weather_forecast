import React, { FC } from 'react'
import imptyImg from '../../images/empty.png'
import './EmptyWeather.css'

const EmptyWeather: FC = () => {
    return (
        <div className="weatherSevenDays-empty">
            <img src={imptyImg}></img>
            <div className="weatherSevenDays-empty_text">Fill in all the fields and the weather will be displayed</div>
        </div>
    )
}

export default EmptyWeather