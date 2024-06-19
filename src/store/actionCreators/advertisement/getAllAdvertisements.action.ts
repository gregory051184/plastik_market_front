import {Dispatch} from "redux";
import {AdvertisementsActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/advertisementAction.interface";
import {getAllAdvertisementsHandler} from "../../../handlers";
import {AdvertisementActionTypes} from "../../actionsTypes";

export const getAllAdvertisementsAction = () => {
    return async (dispatch: Dispatch<AdvertisementsActionTypesInterfaces>) => {
        try {
            const advertisements = await getAllAdvertisementsHandler();
            if (advertisements?.data && advertisements.status === 200) {
                dispatch({type: AdvertisementActionTypes.GET_ALL_ADVERTISEMENTS, advertisements: advertisements.data});
            }
        } catch (error) {

        }
    }
}