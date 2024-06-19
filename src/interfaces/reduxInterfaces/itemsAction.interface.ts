import {ItemActionTypes} from "../../store";

export type ItemsActionTypesInterfaces =
    ItemCreateActionInterface
    | ItemUpdateActionInterface
    | GetAllItemsActionInterface
    | FilterItemsActionInterface
    | GetItemByIdActionInterface
    | GetMyItemsActionInterface

export interface ItemCreateActionInterface {
    type: ItemActionTypes.CREATE_ITEM,
    payload: any
}

export interface ItemUpdateActionInterface {
    type: ItemActionTypes.UPDATE_ITEM,
    payload: any
}

export interface GetAllItemsActionInterface {
    type: ItemActionTypes.GET_ALL_ITEMS,
    items: any[]
}

export interface FilterItemsActionInterface {
    type: ItemActionTypes.FILTER_ITEM,
    items: any[]
}

export interface GetItemByIdActionInterface {
    type: ItemActionTypes.GET_ITEM_BY_ID,
    item: any
}

export interface GetMyItemsActionInterface {
    type: ItemActionTypes.GET_MY_ITEMS,
    items: any[]
}



