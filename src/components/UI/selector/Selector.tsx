import React, {FC, Dispatch, useState} from 'react'
import { useDispatch } from "react-redux";
import { fetchWeather7Days } from '../../../action-creators/weather'
import { cityData } from "../../../data/Cities";
import { ParametersTypes } from '../../../types/parameters';

interface SelectorState {
    type: ParametersTypes;
}

const Selector: FC<SelectorState> = (props) => {

    const [selectCity, setSelectCity] = useState('')
    const dispatch: Dispatch<any> = useDispatch()

    const addCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectCity(e.target.value)
        const city = e.target.value.split(",")
        dispatch({type: props.type, payload: city})
    }

    return (
         <select value={selectCity} onChange={e => addCity(e)}>
                <option value={''} disabled>Select city</option>
                {cityData.map((city) =>
                    <option key={city.city} value={[city.lat, city.lon]}>{city.city}</option>
                )}
            </select>
    )
}

export default Selector