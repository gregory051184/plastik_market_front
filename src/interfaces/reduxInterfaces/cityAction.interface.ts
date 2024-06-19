import {CityActionTypes} from "../../store";

export type CityActionTypesInterfaces =
    CityCreateActionInterface
    | CityUpdateActionInterface
    | GetAllCitiesActionInterface
    | GetCityByIdActionInterface
    | GetCityByIdActionInterface

export interface CityCreateActionInterface {
    type: CityActionTypes.CREATE_CITY,
    payload: any
}

export interface CityUpdateActionInterface {
    type: CityActionTypes.UPDATE_CITY,
    payload: any
}

export interface GetAllCitiesActionInterface {
    type: CityActionTypes.GET_ALL_CITIES,
    cities: any[]
}

export interface GetCityByIdActionInterface {
    type: CityActionTypes.GET_CITY_BY_ID,
    city: any
}

export interface GetCityByIdActionInterface {
    type: CityActionTypes.GET_CITY_BY_ID,
    city: any
}