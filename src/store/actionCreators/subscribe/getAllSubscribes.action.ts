import {Dispatch} from "redux";
import {SubscribeActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/subscribeAction.interface";
import {getAllSubscribesHandler} from "../../../handlers";
import {SubscribeActionTypes} from "../../actionsTypes";

export const getAllSubscribes = () => {
    return async (dispatch: Dispatch<SubscribeActionTypesInterfaces>) => {
        try {
            const subscribes = await getAllSubscribesHandler();
            if (subscribes.data && subscribes.status === 200) {
                dispatch({type: SubscribeActionTypes.GET_ALL_SUBSCRIBES, subscribes: subscribes.data})
            }
        } catch (error) {

        }
    }
}