import {Dispatch} from "redux";
import {UsersActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/usersAction.interface";
import {getUserByChatIdHandler} from "../../../handlers";
import {UserActionTypes} from "../../actionsTypes";

export const getUserByChatIdAction = (chatId: string) => {
    return async (dispatch: Dispatch<UsersActionTypesInterfaces>) => {
        try {
            const user = await getUserByChatIdHandler(chatId);
            if (user) {
                dispatch({type: UserActionTypes.GET_USER_BY_CHAT_ID, user: user});
            }
        } catch (error) {

        }

    }
}