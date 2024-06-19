import {ItemUpdateInterface} from "../../../interfaces";
import {Dispatch} from "redux";
import {
    ItemsActionTypesInterfaces,
} from "../../../interfaces/reduxInterfaces/itemsAction.interface";
import {ItemActionTypes} from "../../actionsTypes";
import {itemUpdateHandler} from "../../../handlers";

export const itemUpdateAction = (itemUpdateInterface: ItemUpdateInterface) => {
    console.log(itemUpdateInterface)
    return async (dispatch: Dispatch<ItemsActionTypesInterfaces>) => {
        try {
            const item = await itemUpdateHandler(itemUpdateInterface);
            if (item) {
                dispatch({type: ItemActionTypes.UPDATE_ITEM, payload: itemUpdateInterface});
            }
        } catch (error) {
        }
    }
}