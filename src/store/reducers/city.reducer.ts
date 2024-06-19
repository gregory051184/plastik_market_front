import {cityState} from "../states/city.state";
import {CityActionTypesInterfaces} from "../../interfaces/reduxInterfaces/cityAction.interface";
import {CityStateInterface} from "../../interfaces";
import {CityActionTypes} from "../actionsTypes";

export function cityReducer(state = cityState, action: CityActionTypesInterfaces): CityStateInterface {
    switch (action.type) {
        case CityActionTypes.CREATE_CITY:
            return ({...state, cities: [...state.cities, action.payload], city: action.payload});
        case CityActionTypes.UPDATE_CITY:
            return ({...state, city: action.payload});
        case CityActionTypes.GET_ALL_CITIES:
            return ({...state, cities: action.cities});
        case CityActionTypes.GET_CITY_BY_ID:
            return ({...state, city: action.city});
        default:
            return state;
    }

}