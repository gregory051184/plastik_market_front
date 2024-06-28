import {SubCategoryUpdateInterface} from "../../../interfaces";
import {Dispatch} from "redux";
import {subCategoryUpdateHandler} from "../../../handlers";
import {SubCategoryActionTypes} from "../../actionsTypes";
import {SubCategoriesActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/subCategoryAction.interface";

export const subCategoryUpdateAction = (subCategoryUpdateInterface: SubCategoryUpdateInterface, chatId: string) => {
    return async (dispatch: Dispatch<SubCategoriesActionTypesInterfaces>) => {
        try {
            const category = await subCategoryUpdateHandler(subCategoryUpdateInterface, chatId);
            if (category) {
                dispatch({type: SubCategoryActionTypes.UPDATE_SUBCATEGORY, payload: subCategoryUpdateInterface});
            }
        } catch (error) {

        }
    }
}