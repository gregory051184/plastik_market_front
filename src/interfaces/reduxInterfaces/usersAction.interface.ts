import {UserActionTypes} from "../../store";

export type UsersActionTypesInterfaces =
    UserUpdateActionInterface
    | GetAllUsersActionInterface
    | GetUsersByIdActionInterface
    | GetUserByChatIdActionInterface

export interface UserUpdateActionInterface {
    type: UserActionTypes.UPDATE_USER,
    payload: any
}

export interface GetAllUsersActionInterface {
    type: UserActionTypes.GET_ALL_USERS,
    users: any[]
}

export interface GetUsersByIdActionInterface {
    type: UserActionTypes.GET_USER_BY_ID,
    user: any
}

export interface GetUserByChatIdActionInterface {
    type: UserActionTypes.GET_USER_BY_CHAT_ID,
    user: any
}
