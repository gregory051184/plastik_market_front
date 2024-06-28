import {SubscribeUpdateInterface} from "../../../interfaces";
import {Dispatch} from "redux";
import {SubscribeActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/subscribeAction.interface";
import {subscribeUpdateHandler} from "../../../handlers";
import {SubscribeActionTypes} from "../../actionsTypes";

export const subscribeUpdateAction = (subscribeUpdateInterface: SubscribeUpdateInterface, chatId: string) => {
    return async (dispatch: Dispatch<SubscribeActionTypesInterfaces>) => {
        try {
            const subscribe = await subscribeUpdateHandler(subscribeUpdateInterface, chatId);
            if (subscribe) {
                dispatch({type: SubscribeActionTypes.UPDATE_SUBSCRIBE, payload: subscribeUpdateInterface});
            }
        } catch (error) {
        }
    }
}