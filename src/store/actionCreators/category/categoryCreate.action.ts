import {CategoryCreateInterface} from "../../../interfaces";
import {Dispatch} from "redux";
import {CategoryActionTypesInterfaces} from "../../../interfaces/reduxInterfaces/categoryAction.interface";
import {categoryCreateHandler} from "../../../handlers";
import {CategoryActionTypes} from "../../actionsTypes";

export const categoryCreateAction = (categoryDto: CategoryCreateInterface) => {
    return async (dispatch: Dispatch<CategoryActionTypesInterfaces>) => {
        try {
            const category = await categoryCreateHandler(categoryDto);
            if (category) {
                dispatch({type: CategoryActionTypes.CREATE_CATEGORY, payload: category});
            }
        } catch (error) {
            dispatch({type: CategoryActionTypes.CREATE_CATEGORY, payload: {}});
        }
    }
}