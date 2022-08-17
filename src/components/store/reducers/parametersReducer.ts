import { ParametersState, ParametersTypes, ParametersAction } from "../../../types/parameters"

const initialState: ParametersState = {
    city7Days: ['', ''],
    cityPast: ['', ''],
    date: ''
}

export const parametersReducer = (state = initialState, action: ParametersAction): ParametersState => {
    switch (action.type) {
        case ParametersTypes.ADD_CITY_7DAYS:
            return { ...state, city7Days: action.payload }
        case ParametersTypes.ADD_CITY_PAST:
            return { ...state, cityPast: action.payload }
        case ParametersTypes.ADD_DATE:
            return { ...state, date: action.payload }
        default:
            return state
    }
}