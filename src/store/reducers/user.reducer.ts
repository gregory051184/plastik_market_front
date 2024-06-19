import {userState} from "../states/user.state";
import {UsersActionTypesInterfaces} from "../../interfaces/reduxInterfaces/usersAction.interface";
import {UserStateInterface} from "../../interfaces";
import {UserActionTypes} from "../actionsTypes";

export function userReducer(state = userState, action: UsersActionTypesInterfaces): UserStateInterface {
    switch (action.type) {
        case UserActionTypes.UPDATE_USER:
            return ({...state, user: action.payload});
        case UserActionTypes.GET_ALL_USERS:
            return ({...state, users: action.users});
        case UserActionTypes.GET_USER_BY_ID:
            return ({...state, user: action.user});
        case UserActionTypes.GET_USER_BY_CHAT_ID:
            return ({...state, user: action.user});
        default:
            return state
    }
}