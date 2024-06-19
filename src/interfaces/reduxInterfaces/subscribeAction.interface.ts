import {SubscribeActionTypes} from "../../store";

export type SubscribeActionTypesInterfaces =
    SubscribeCreateActionInterface
    | SubscribeUpdateActionInterface
    | GetAllSubscribesActionInterface
    | GetSubscribeByIdActionInterface

export interface SubscribeCreateActionInterface {
    type: SubscribeActionTypes.CREATE_SUBSCRIBE,
    payload: any
}

export interface SubscribeUpdateActionInterface {
    type: SubscribeActionTypes.UPDATE_SUBSCRIBE,
    payload: any
}

export interface GetAllSubscribesActionInterface {
    type: SubscribeActionTypes.GET_ALL_SUBSCRIBES,
    subscribes: any
}

export interface GetSubscribeByIdActionInterface {
    type: SubscribeActionTypes.GET_SUBSCRIBE_BY_ID,
    subscribe: any
}