import {AdvertisementUpdateInterface} from "../../../interfaces";
import {Dispatch} from "redux";
import {AdvertisementsActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/advertisementAction.interface";
import {advertisementUpdateHandler} from "../../../handlers";
import {AdvertisementActionTypes} from "../../actionsTypes";

export const advertisementUpdateAction = (advertisementUpdateInterface: AdvertisementUpdateInterface) => {
    return async (dispatch: Dispatch<AdvertisementsActionTypesInterfaces>) => {
        try {
            const advertisement = await advertisementUpdateHandler(advertisementUpdateInterface);
            if (advertisement) {
                dispatch({type: AdvertisementActionTypes.UPDATE_ADVERTISEMENT, payload: advertisementUpdateInterface});
            }
        } catch (error) {

        }
    }
}