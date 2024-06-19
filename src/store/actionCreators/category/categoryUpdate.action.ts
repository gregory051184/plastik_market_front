import {CategoryUpdateInterface} from "../../../interfaces";
import {Dispatch} from "redux";
import {CategoryActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/categoryAction.interface";
import {categoryUpdateHandler} from "../../../handlers";
import {CategoryActionTypes} from "../../actionsTypes";

export const categoryUpdateAction = (categoryUpdateInterface: CategoryUpdateInterface) => {
    return async (dispatch: Dispatch<CategoryActionTypesInterfaces>) => {
        try {
            const category = await categoryUpdateHandler(categoryUpdateInterface);
            if (category) {
                dispatch({type: CategoryActionTypes.UPDATE_CATEGORY, payload: categoryUpdateInterface});
            }
        } catch (error) {

        }
    }
}