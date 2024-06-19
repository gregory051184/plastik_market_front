import {itemState} from "../states/item.state";
import {ItemsActionTypesInterfaces} from "../../interfaces/reduxInterfaces/itemsAction.interface";
import {ItemActionTypes} from "../actionsTypes";
import {ItemStateInterface} from "../../interfaces";

export function itemReducer(state = itemState, action: ItemsActionTypesInterfaces): ItemStateInterface {
    switch (action.type) {
        case ItemActionTypes.CREATE_ITEM:
            return ({...state, items: [...state.items, action.payload], item: action.payload});
        case ItemActionTypes.UPDATE_ITEM:
            return ({...state, item: action.payload});
        case ItemActionTypes.GET_ALL_ITEMS:
            return ({...state, items: action.items});
        case ItemActionTypes.FILTER_ITEM:
            return ({...state, items: action.items});
        case ItemActionTypes.GET_ITEM_BY_ID:
            return ({...state, item: action.item});
        case ItemActionTypes.GET_MY_ITEMS:
            return ({...state, items: action.items});
        default:
            return state;
    }
}