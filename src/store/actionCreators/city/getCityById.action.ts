import {Dispatch} from "redux";
import {CityActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/cityAction.interface";
import {getCityByIdHandler} from "../../../handlers/city/getCityById.handler";
import {CityActionTypes} from "../../actionsTypes";

export const getCityByIdAction = (cityId: number) => {
    return async (dispatch: Dispatch<CityActionTypesInterfaces>) => {
        try {
            const city = await getCityByIdHandler(cityId);
            if (city) {
                dispatch({type: CityActionTypes.GET_CITY_BY_ID, city: city});
            }
        } catch (error) {

        }

    }
}