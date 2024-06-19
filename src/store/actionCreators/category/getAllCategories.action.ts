import {Dispatch} from "redux";
import {CategoryActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/categoryAction.interface";
import {getAllCategoriesHandler} from "../../../handlers";
import {CategoryActionTypes} from "../../actionsTypes";

export const getAllCategoriesAction = () => {
    return async (dispatch: Dispatch<CategoryActionTypesInterfaces>) => {
        try {
            const categories = await getAllCategoriesHandler();
            if(categories) {
                dispatch({type: CategoryActionTypes.GET_ALL_CATEGORIES, categories: categories})
            }
        }catch (error) {

        }
    }
}