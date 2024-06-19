import {ItemCreateInterface} from "../../../interfaces";
import {itemCreateHandler} from "../../../handlers";
import {Dispatch} from "redux";
import {
    ItemsActionTypesInterfaces,
} from "../../../interfaces/reduxInterfaces/itemsAction.interface";
import {ItemActionTypes} from "../../actionsTypes";

export const itemCreateAction = (itemCreateInterface: ItemCreateInterface) => {
    return async (dispatch: Dispatch<ItemsActionTypesInterfaces>) => {
        try {
            const item = await itemCreateHandler(itemCreateInterface)

            if (item) {
                dispatch({type: ItemActionTypes.CREATE_ITEM, payload: item});
            }
        } catch (error) {
            dispatch({type: ItemActionTypes.CREATE_ITEM, payload: {}})
        }
    }
}