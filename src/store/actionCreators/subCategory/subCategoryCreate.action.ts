import {SubCategoryCreateInterface} from "../../../interfaces";
import {Dispatch} from "redux";
import {subCategoryCreateHandler} from "../../../handlers";
import {SubCategoryActionTypes} from "../../actionsTypes";
import {SubCategoriesActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/subCategoryAction.interface";

export const subCategoryCreateAction = (subCategoryCreateInterface: SubCategoryCreateInterface) => {
    return async (dispatch: Dispatch<SubCategoriesActionTypesInterfaces>) => {
        try {
            const subCategory = await subCategoryCreateHandler(subCategoryCreateInterface);
            if (subCategory) {
                dispatch({type: SubCategoryActionTypes.CREATE_SUBCATEGORY, payload: subCategory});
            }
        } catch (error) {
            dispatch({type: SubCategoryActionTypes.CREATE_SUBCATEGORY, payload: {}});
        }
    }
}