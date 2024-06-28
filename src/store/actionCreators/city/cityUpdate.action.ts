import {CityUpdateInterface} from "../../../interfaces";
import {Dispatch} from "redux";
import {CityActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/cityAction.interface";
import {cityCreateHandler, cityUpdateHandler} from "../../../handlers";
import {CityActionTypes} from "../../actionsTypes";

export const cityUpdateAction = (cityUpdateInterface: CityUpdateInterface, chatId: string) => {
    return async (dispatch: Dispatch<CityActionTypesInterfaces>) => {
        try {
            //const city = await cityCreateHandler(cityUpdateInterface);
            const city = await cityUpdateHandler(cityUpdateInterface, chatId);
            if (city) {
                dispatch({type: CityActionTypes.UPDATE_CITY, payload: cityUpdateInterface});
            }
        } catch (error) {

        }
    }
}