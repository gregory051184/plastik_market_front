import {subscribeState} from "../states/subscribe.state";
import {SubscribeActionTypesInterfaces} from "../../interfaces/reduxInterfaces/subscribeAction.interface";
import {SubscribeStateInterface} from "../../interfaces";
import {SubscribeActionTypes} from "../actionsTypes";

export function subscribeReducer(state = subscribeState, action: SubscribeActionTypesInterfaces):
    SubscribeStateInterface {
    switch (action.type) {
        case SubscribeActionTypes.CREATE_SUBSCRIBE:
            return ({...state, subscribes: [...state.subscribes, action.payload], subscribe: action.payload});
        case SubscribeActionTypes.UPDATE_SUBSCRIBE:
            return ({...state, subscribe: action.payload});
        case SubscribeActionTypes.GET_ALL_SUBSCRIBES:
            return ({...state, subscribes: action.subscribes});
        case SubscribeActionTypes.GET_SUBSCRIBE_BY_ID:
            return ({...state, subscribe: action.subscribe});
        default:
            return state
    }

}