import {subCategoryState} from "../states/subCategory.state";
import {SubCategoriesActionTypesInterfaces} from "../../interfaces/reduxInterfaces/subCategoryAction.interface";
import {SubCategoryStateInterface} from "../../interfaces";
import {SubCategoryActionTypes} from "../actionsTypes";

export function subCategoryReducer(state = subCategoryState, action: SubCategoriesActionTypesInterfaces):
    SubCategoryStateInterface {
    switch (action.type) {

        case SubCategoryActionTypes.CREATE_SUBCATEGORY:
            return ({...state, subCategories: [...state.subCategories, action.payload], subCategory: action.payload});
        case SubCategoryActionTypes.UPDATE_SUBCATEGORY:
            return ({...state, subCategory: action.payload});
        case SubCategoryActionTypes.GET_ALL_SUBCATEGORIES:
            return ({...state, subCategories: action.subCategories});
        case SubCategoryActionTypes.GET_SUBCATEGORY_BY_ID:
            return ({...state, subCategory: action.subCategory});
        case SubCategoryActionTypes.GET_SUBCATEGORY_BY_CATEGORY:
            return ({...state, subCategories: action.subCategories});
        default:
            return state;
    }
}