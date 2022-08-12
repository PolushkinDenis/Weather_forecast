import React, { FC } from 'react'
import Weather from '../weather/Weather'
import Header from '../header/Header'

const Main: FC = () => {

    return (
        <>
            <Header />
            <Weather />
        </>
    )
}

export default Main