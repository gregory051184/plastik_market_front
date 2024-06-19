import {Dispatch} from "redux";
import {SubCategoriesActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/subCategoryAction.interface";
import {getSubCategoriesByCategoryHandler} from "../../../handlers";
import {SubCategoryActionTypes} from "../../actionsTypes";

export const getSubCategoryByCategoryAction = (categoryId: number) => {
    return async (dispatch: Dispatch<SubCategoriesActionTypesInterfaces>) => {
        try {
            const subCategories = await getSubCategoriesByCategoryHandler(categoryId);
            if (subCategories) {
                dispatch({type: SubCategoryActionTypes.GET_SUBCATEGORY_BY_CATEGORY, subCategories: subCategories})
            }
        } catch (error) {

        }
    }
}