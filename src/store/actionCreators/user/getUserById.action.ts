import {Dispatch} from "redux";
import {UserActionTypes} from "../../actionsTypes";
import {getUserByIdHandler} from "../../../handlers";
import {UsersActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/usersAction.interface";

export const getUserByIdAction = (userId: number) => {
    return async (dispatch: Dispatch<UsersActionTypesInterfaces>) => {
        try {
            const user = await getUserByIdHandler(userId);
            if (user) {
                dispatch({type: UserActionTypes.GET_USER_BY_ID, user: user});
            }
        } catch (error) {

        }

    }
}