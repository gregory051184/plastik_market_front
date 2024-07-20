import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import React, {useEffect} from "react";
import {
    getAllCategoriesAction,
    getCategoryByIdAction,
    getSubCategoryByCategoryAction
} from "../../../store";
import {store} from "../../../store/store";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'
import {SubCategoryForCreationList} from "../subCategory/subCategoryForCreation.list";
import {CustomOption} from "../../selects/custom.option";

interface CatInterface {
    currentCategory: any,
    currentSubCategory: any
}

export function CategoryForCreationList({currentCategory, currentSubCategory}: CatInterface) {
    const dispatch: any = useDispatch();
    const {categories, category} = useTypedSelector(state => state.categories);
    const {subCategories} = useTypedSelector(state => state.subCategories);

    const categoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(getCategoryByIdAction(+event.target.value)).then(() => {
            dispatch(getSubCategoryByCategoryAction(store.getState().categories.category.id));

        })

    }

    useEffect(() => {
        dispatch(getAllCategoriesAction());
    }, []);


    return (
        <>
            (
            <select onChange={categoryChangeHandler} className={classes.select}>
                <option>{currentCategory.id > 0 ? currentCategory.title :'Выберите категорию'}</option>
                {
                    categories.map((category: any) =>
                        <CustomOption
                            key={category.id}
                            placeholder={category.title}
                            value={category.id}
                            optionText={category.title}></CustomOption>)}
            </select>
            {(category.id > 0 || currentCategory.id > 0) &&
                <SubCategoryForCreationList
                    subCategories={subCategories} currentSubCategory={currentSubCategory}></SubCategoryForCreationList>}


        </>
    )
}