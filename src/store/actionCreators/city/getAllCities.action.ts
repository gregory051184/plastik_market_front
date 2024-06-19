import {Dispatch} from "redux";
import {CityActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/cityAction.interface";
import {getAllCitiesHandler} from "../../../handlers";
import {CityActionTypes} from "../../actionsTypes";

export const getAllCitiesAction = () => {
    return async (dispatch: Dispatch<CityActionTypesInterfaces>) => {
        try {
            const cities = await getAllCitiesHandler();
            if (cities) {
                dispatch({type: CityActionTypes.GET_ALL_CITIES, cities: cities});
            }
        } catch (error) {
        }
    }
}