export interface WeatherState {
    weather7Days: any,
    weatherPast: any,
    loading: boolean,
    error: null | string
}

export enum WeatherActionTypes {
    FETCH_WEATHER_7DAYS = "FETCH_WEATHER_7DAYS",
    FETCH_WEATHER_PAST = "FETCH_WEATHER_PAST",
    FETCH_WEATHER_7DAYS_SUCCESS = "FETCH_WEATHER_7DAYS_SUCCESS",
    FETCH_WEATHER_PAST_SUCCESS = "FETCH_WEATHER_PAST_SUCCESS",
    FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR"
}

interface FetchWeatherAction7Days {
    type: WeatherActionTypes.FETCH_WEATHER_7DAYS
}
interface FetchWeatherActionPast {
    type: WeatherActionTypes.FETCH_WEATHER_PAST
}
interface FetchWeather7DaysSuccessAction {
    type: WeatherActionTypes.FETCH_WEATHER_7DAYS_SUCCESS,
    payload: any[];
}
interface FetchWeatherPastSuccessAction {
    type: WeatherActionTypes.FETCH_WEATHER_PAST_SUCCESS,
    payload: any[];
}
interface FetchWeatherErorAction {
    type: WeatherActionTypes.FETCH_WEATHER_ERROR,
    payload: string
}

export type WeatherAction = FetchWeatherAction7Days | FetchWeatherActionPast | FetchWeather7DaysSuccessAction | FetchWeatherPastSuccessAction | FetchWeatherErorAction

export type Weather = {
    temp: {
        data: [
            {
                valid_date: string,
                ts: number,
                datetime: string,
                wind_gust_spd: number,
                wind_spd: number,
                wind_dir: number,
                wind_cdir: string,
                wind_cdir_full: string,
                temp: number,
                max_temp: number,
                min_temp: number,
                high_temp: number,
                low_temp: number,
                app_max_temp: number,
                app_min_temp: number,
                pop: number,
                precip: number,
                snow: number,
                snow_depth: number,
                slp: number,
                pres: number,
                dewpt: number,
                rh: number,
                weather: {
                    icon: string,
                    code: string,
                    description: string
                },
                clouds_low: number,
                clouds_mid: number,
                clouds_hi: number,
                clouds: number,
                vis: number,
                max_dhi: number,
                uv: number,
                moon_phase: number,
                moon_phase_lunation: number,
                moonrise_ts: number,
                moonset_ts: number,
                sunrise_ts: number,
                sunset_ts: number
            },
        ]
        city_name: string | null,
        lon: string | null,
        timezone: string | null,
        lat: string | null,
        country_code: string | null,
        state_code: string | null,
    } | null
}

export interface ICurrentDays {
    data: [
        {
            valid_date: string,
            ts: number,
            datetime: string,
            wind_gust_spd: number,
            wind_spd: number,
            wind_dir: number,
            wind_cdir: string,
            wind_cdir_full: string,
            temp: number,
            max_temp: number,
            min_temp: number,
            high_temp: number,
            low_temp: number,
            app_max_temp: number,
            app_min_temp: number,
            pop: number,
            precip: number,
            snow: number,
            snow_depth: number,
            slp: number,
            pres: number,
            dewpt: number,
            rh: number,
            weather: {
                icon: string,
                code: string,
                description: string
            },
            clouds_low: number,
            clouds_mid: number,
            clouds_hi: number,
            clouds: number,
            vis: number,
            max_dhi: number,
            uv: number,
            moon_phase: number,
            moon_phase_lunation: number,
            moonrise_ts: number,
            moonset_ts: number,
            sunrise_ts: number,
            sunset_ts: number
        }
    ]
    city_name: string,
    lon: string,
    timezone: string,
    lat: string,
    country_code: string,
    state_code: string,
}

export interface IWeatherDays {

    valid_date: string,
    ts: number,
    datetime: string,
    wind_gust_spd: number,
    wind_spd: number,
    wind_dir: number,
    wind_cdir: string,
    wind_cdir_full: string,
    temp: number,
    max_temp: number,
    min_temp: number,
    high_temp: number,
    low_temp: number,
    app_max_temp: number,
    app_min_temp: number,
    pop: number,
    precip: number,
    snow: number,
    snow_depth: number,
    slp: number,
    pres: number,
    dewpt: number,
    rh: number,
    weather: {
        icon: string,
        code: string,
        description: string
    },
    clouds_low: number,
    clouds_mid: number,
    clouds_hi: number,
    clouds: number,
    vis: number,
    max_dhi: number,
    uv: number,
    moon_phase: number,
    moon_phase_lunation: number,
    moonrise_ts: number,
    moonset_ts: number,
    sunrise_ts: number,
    sunset_ts: number

}