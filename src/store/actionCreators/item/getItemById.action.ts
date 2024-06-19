import {Dispatch} from "redux";
import {ItemActionTypes} from "../../actionsTypes";
import {getItemByIdHandler} from "../../../handlers";
import {ItemsActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/itemsAction.interface";

export const getItemByIdAction = (itemId: number) => {
    return async (dispatch: Dispatch<ItemsActionTypesInterfaces>) => {
        try {
            const item = await getItemByIdHandler(itemId);
            if (item) {
                dispatch({type: ItemActionTypes.GET_ITEM_BY_ID, item: item});
            }
        } catch (error) {
        }
    }
}