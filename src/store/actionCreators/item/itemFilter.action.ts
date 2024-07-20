import {ItemsFilterInterface} from "../../../interfaces/items/itemsFilter.interface";
import {Dispatch} from "redux";
import {ItemsActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/itemsAction.interface";
import {itemsFilterHandler} from "../../../handlers";
import {ItemActionTypes} from "../../actionsTypes";

export const itemFilterAction = (itemFilterInterface: ItemsFilterInterface, chatId: string) => {
    return async (dispatch: Dispatch<ItemsActionTypesInterfaces>) => {
        try {
            const items = await itemsFilterHandler(itemFilterInterface, chatId);
            if (items) {
                dispatch({type: ItemActionTypes.FILTER_ITEM, items: items})
            }
        } catch (error) {

        }
    }
}