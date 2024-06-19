import {Dispatch} from "redux";
import {CategoryActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/categoryAction.interface";
import {getCategoryByIdHandler} from "../../../handlers";
import {CategoryActionTypes} from "../../actionsTypes";

export const getCategoryByIdAction = (categoryId: number) => {
    return async (dispatch: Dispatch<CategoryActionTypesInterfaces>) => {
        try {
            const category = await getCategoryByIdHandler(categoryId);
            if (category) {
                dispatch({type: CategoryActionTypes.GET_CATEGORY_BY_ID, category: category})
            }
        } catch (error) {

        }
    }
}