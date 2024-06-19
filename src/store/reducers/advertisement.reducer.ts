import {advertisementState} from "../states/advertisement.state";
import {AdvertisementsActionTypesInterfaces} from "../../interfaces/reduxInterfaces/advertisementAction.interface";
import {AdvertisementStateInterface} from "../../interfaces";
import {AdvertisementActionTypes} from "../actionsTypes";

export function advertisementReducer(state = advertisementState, action: AdvertisementsActionTypesInterfaces):
    AdvertisementStateInterface {
    switch (action.type) {
        case AdvertisementActionTypes.CREATE_ADVERTISEMENT:
            return ({...state, advertisements: [...state.advertisements, action.payload], advertisement: action.payload});
        case AdvertisementActionTypes.UPDATE_ADVERTISEMENT:
            return ({...state, advertisement: action.payload});
        case AdvertisementActionTypes.GET_ALL_ADVERTISEMENTS:
            return ({...state, advertisements: action.advertisements});
        case AdvertisementActionTypes.GET_ADVERTISEMENT_BY_ID:
            return ({...state, advertisement: action.advertisement});
        default:
            return state;
    }
}