import {Dispatch} from "redux";
import {ItemsActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/itemsAction.interface";
import {getAllItemsHandler} from "../../../handlers";
import {ItemActionTypes} from "../../actionsTypes";

export const getAllItemsAction = () => {
    return async (dispatch: Dispatch<ItemsActionTypesInterfaces>) => {
        try {
            const items = await getAllItemsHandler();
            if (items) {
                dispatch({type: ItemActionTypes.GET_ALL_ITEMS, items: items})
            }
        } catch (error) {

        }
    }
}