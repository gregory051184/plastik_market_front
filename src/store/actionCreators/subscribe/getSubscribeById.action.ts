import {Dispatch} from "redux";
import {SubscribeActionTypes} from "../../actionsTypes";
import {getSubscribeByIdHandler} from "../../../handlers";
import {SubscribeActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/subscribeAction.interface";

export const getSubscribeByIdAction = (subscribeId: number) => {
    return async (dispatch: Dispatch<SubscribeActionTypesInterfaces>) => {
        try {
            const subscribe = await getSubscribeByIdHandler(subscribeId);
            if (subscribe?.data && subscribe.status === 200) {
                dispatch({type: SubscribeActionTypes.GET_SUBSCRIBE_BY_ID, subscribe: subscribe.data});
            }
        } catch (error) {

        }

    }
}