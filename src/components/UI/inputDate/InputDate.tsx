import React, {Dispatch, FC, useState} from 'react'
import { useDispatch } from 'react-redux';
import { ParametersTypes, ParametersAction } from '../../../types/parameters';
import './InputDate.css'

const InputDate: FC = () => {
    const dispatch: Dispatch<ParametersAction> = useDispatch()
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value
        dispatch({type: ParametersTypes.ADD_DATE, payload: date})
    }

    return (
        <input className='inputDate' type="date" onChange={e => onChangeHandler(e)}></input>
    )
}

export default InputDate