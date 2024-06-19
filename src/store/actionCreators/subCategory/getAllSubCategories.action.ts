import {Dispatch} from "redux";
import {getAllSubCategoriesHandler} from "../../../handlers";
import {SubCategoryActionTypes} from "../../actionsTypes";
import {SubCategoriesActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/subCategoryAction.interface";

export const getAllSubCategoriesAction = () => {
    return async (dispatch: Dispatch<SubCategoriesActionTypesInterfaces>) => {
        try {
            const subCategories = await getAllSubCategoriesHandler();
            if (subCategories) {
                dispatch({type: SubCategoryActionTypes.GET_ALL_SUBCATEGORIES, subCategories: subCategories})
            }
        } catch (error) {

        }
    }
}