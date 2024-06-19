import {AdvertisementCreateInterface} from "../../../interfaces";
import {Dispatch} from "redux";
import {AdvertisementsActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/advertisementAction.interface";
import {advertisementCreateHandler} from "../../../handlers";
import {AdvertisementActionTypes} from "../../actionsTypes";

export const advertisementCreateAction = (advertisementCreateInterface: AdvertisementCreateInterface) => {
    return async (dispatch: Dispatch<AdvertisementsActionTypesInterfaces>) => {
        try {
            const advertisement = await advertisementCreateHandler(advertisementCreateInterface);
            if (advertisement) {
                dispatch({type: AdvertisementActionTypes.CREATE_ADVERTISEMENT, payload: advertisement});
            }
        } catch (error) {
            dispatch({type: AdvertisementActionTypes.CREATE_ADVERTISEMENT, payload: {}})
        }
    }
}