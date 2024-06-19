import {Dispatch} from "redux";
import {SubCategoriesActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/subCategoryAction.interface";
import {getSubCategoryByIdHandler} from "../../../handlers";
import {SubCategoryActionTypes} from "../../actionsTypes";

export const getSubCategoryByIdAction = (subCategoryId: number) => {
    return async (dispatch: Dispatch<SubCategoriesActionTypesInterfaces>) => {
        try {
            const subCategory = await getSubCategoryByIdHandler(subCategoryId);
            if (subCategory) {
                dispatch({type: SubCategoryActionTypes.GET_SUBCATEGORY_BY_ID, subCategory: subCategory})
            }
        } catch (error) {
        }
    }
}