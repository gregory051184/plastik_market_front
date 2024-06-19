import {CityCreateInterface} from "../../../interfaces";
import {Dispatch} from "redux";
import {CityActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/cityAction.interface";
import {cityCreateHandler} from "../../../handlers";
import {CityActionTypes} from "../../actionsTypes";


export const cityCreateAction = (cityCreateInterface: CityCreateInterface) => {
    return async (dispatch: Dispatch<CityActionTypesInterfaces>) => {
        try {
            const city = await cityCreateHandler(cityCreateInterface);
            //if (city?.data && city.status === 201) {
            if(city) {
                dispatch({type: CityActionTypes.CREATE_CITY, payload: city});
            }
        } catch (error) {
            dispatch({type: CityActionTypes.CREATE_CITY, payload: {}});
        }
    }
}