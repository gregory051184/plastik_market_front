import {Dispatch} from "redux";
import {AdvertisementActionTypes} from "../../actionsTypes";
import {AdvertisementsActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/advertisementAction.interface";
import {getAdvertisementByIdHandler} from "../../../handlers";

export const getAdvertisementByIdAction = (advertisementId: number) => {
    return async (dispatch: Dispatch<AdvertisementsActionTypesInterfaces>) => {
        try {
            const advertisement = await getAdvertisementByIdHandler(advertisementId);
            if (advertisement?.data && advertisement.status === 200) {
                dispatch({type: AdvertisementActionTypes.GET_ADVERTISEMENT_BY_ID, advertisement: advertisement.data});
            }
        } catch (error) {

        }

    }
}