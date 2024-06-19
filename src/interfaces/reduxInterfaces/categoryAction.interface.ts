import {CategoryActionTypes} from "../../store";

export type CategoryActionTypesInterfaces =
    CategoryCreateActionInterface
    | CategoryUpdateActionInterface
    | GetAllCategoriesActionInterface
    | GetCategoryByIdActionInterface
    | GetCategoryByIdActionInterface

export interface CategoryCreateActionInterface {
    type: CategoryActionTypes.CREATE_CATEGORY,
    payload: any
}

export interface CategoryUpdateActionInterface {
    type: CategoryActionTypes.UPDATE_CATEGORY,
    payload: any
}

export interface GetAllCategoriesActionInterface {
    type: CategoryActionTypes.GET_ALL_CATEGORIES,
    categories: any[]
}

export interface GetCategoryByIdActionInterface {
    type: CategoryActionTypes.GET_CATEGORY_BY_ID,
    category: any
}

export interface GetCategoryByIdActionInterface {
    type: CategoryActionTypes.GET_CATEGORY_BY_ID,
    category: any
}

