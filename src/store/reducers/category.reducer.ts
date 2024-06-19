import {categoryState} from "../states/category.state";
import {CategoryActionTypesInterfaces} from "../../interfaces/reduxInterfaces/categoryAction.interface";
import {CategoryStateInterface} from "../../interfaces";
import {CategoryActionTypes} from "../actionsTypes";

export function categoryReducer(state = categoryState, action: CategoryActionTypesInterfaces):
    CategoryStateInterface {
    switch (action.type) {
        case CategoryActionTypes.CREATE_CATEGORY:
            return ({...state, categories: [...state.categories, action.payload], category: action.payload});
        case CategoryActionTypes.UPDATE_CATEGORY:
            return ({...state, category: action.payload});
        case CategoryActionTypes.GET_ALL_CATEGORIES:
            return ({...state, categories: action.categories});
        case CategoryActionTypes.GET_CATEGORY_BY_ID:
            return ({...state, category: action.category});
        default:
            return state;
    }
}