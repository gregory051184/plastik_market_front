import {SubscribeCreateInterface} from "../../../interfaces";
import {Dispatch} from "redux";
import {SubscribeActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/subscribeAction.interface";
import {subscribeCreateHandler} from "../../../handlers";
import {SubscribeActionTypes} from "../../actionsTypes";

export const subscribeCreateAction = (subscribeCreateInterface: SubscribeCreateInterface) => {
    return async (dispatch: Dispatch<SubscribeActionTypesInterfaces>) => {
        try {
            const subscribe = await subscribeCreateHandler(subscribeCreateInterface);
            if(subscribe) {
                dispatch({type: SubscribeActionTypes.CREATE_SUBSCRIBE, payload: subscribe});
            }
        }catch (error) {
            dispatch({type: SubscribeActionTypes.CREATE_SUBSCRIBE, payload: {}});
        }
    }
}