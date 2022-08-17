export interface ParametersState {
    city7Days: string[];
    cityPast: string[];
    date: string;
}

export enum ParametersTypes {
    ADD_DATE = "ADD_DATE",
    ADD_CITY_7DAYS = "ADD_CITY_7DAYS",
    ADD_CITY_PAST = "ADD_CITY_PAST"
}

interface ParametersAddDateAction {
    type: ParametersTypes.ADD_DATE;
    payload: string;
}
interface ParametersAddCity7DaysAction {
    type: ParametersTypes.ADD_CITY_7DAYS;
    payload: string[];
}
interface ParametersAddCitypePastAction {
    type: ParametersTypes.ADD_CITY_PAST;
    payload: string[];
}

export type ParametersAction = ParametersAddDateAction | ParametersAddCity7DaysAction | ParametersAddCitypePastAction
