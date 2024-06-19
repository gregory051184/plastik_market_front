import {AdvertisementActionTypes} from "../../store";

export type AdvertisementsActionTypesInterfaces =
    AdvertisementCreateActionInterface
    | AdvertisementUpdateActionInterface
    | GetAllAdvertisementsActionInterface
    | GetAdvertisementsByIdActionInterface

export interface AdvertisementCreateActionInterface {
    type: AdvertisementActionTypes.CREATE_ADVERTISEMENT,
    payload: any
}

export interface AdvertisementUpdateActionInterface {
    type: AdvertisementActionTypes.UPDATE_ADVERTISEMENT,
    payload: any
}

export interface GetAllAdvertisementsActionInterface {
    type: AdvertisementActionTypes.GET_ALL_ADVERTISEMENTS,
    advertisements: any[]
}

export interface GetAdvertisementsByIdActionInterface {
    type: AdvertisementActionTypes.GET_ADVERTISEMENT_BY_ID,
    advertisement: any
}