import {SubCategoryActionTypes} from "../../store";

export type SubCategoriesActionTypesInterfaces =
    SubCategoryCreateActionInterface
    | SubCategoryUpdateActionInterface
    | GetAllSubCategoriesActionInterface
    | GetSubCategoryByIdActionInterface
    | GetSubCategoryByCategoryActionInterface

export interface SubCategoryCreateActionInterface {
    type: SubCategoryActionTypes.CREATE_SUBCATEGORY,
    payload: any
}

export interface SubCategoryUpdateActionInterface {
    type: SubCategoryActionTypes.UPDATE_SUBCATEGORY,
    payload: any
}

export interface GetAllSubCategoriesActionInterface {
    type: SubCategoryActionTypes.GET_ALL_SUBCATEGORIES,
    subCategories: any[]
}

export interface GetSubCategoryByIdActionInterface {
    type: SubCategoryActionTypes.GET_SUBCATEGORY_BY_ID,
    subCategory: any
}

export interface GetSubCategoryByCategoryActionInterface {
    type: SubCategoryActionTypes.GET_SUBCATEGORY_BY_CATEGORY,
    subCategories: any[]
}