import {UserUpdateInterface} from "../../../interfaces";
import {Dispatch} from "redux";
import {UsersActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/usersAction.interface";
import {userUpdateHandler} from "../../../handlers";
import {UserActionTypes} from "../../actionsTypes";

export const userUpdateAction = (userUpdateInterface: UserUpdateInterface, chatId: string) => {
    return async (dispatch: Dispatch<UsersActionTypesInterfaces>) => {
        try {
            const user = await userUpdateHandler(userUpdateInterface, chatId)
            if (user) {
                dispatch({type: UserActionTypes.UPDATE_USER, payload: userUpdateInterface});
            }
        } catch (error) {
        }
    }
}