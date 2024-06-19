import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import React, {useEffect, useState} from "react";
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


export function CategoryForCreationList() {
    const dispatch: any = useDispatch();
    const {categories, category} = useTypedSelector(state => state.categories);
    const {subCategories} = useTypedSelector(state => state.subCategories);

    const [currentCategory, setCurrentCategory] = useState('');

    const [currentSubCategories, setCurrentSubCategories] = useState([{}]);

    const [show, setShow] = React.useState(false);

    //const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //    dispatch(getCategoryByIdAction(+event.target.name))
    //}

    const categoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(getCategoryByIdAction(+event.target.value)).then(() => {
            dispatch(getSubCategoryByCategoryAction(store.getState().categories.category.id));

        })

    }

    useEffect(() => {
        dispatch(getAllCategoriesAction());
    }, []);
    {/*useEffect(() => {
        dispatch(getAllCategoriesAction()).then(() => {
            setCurrentCategory(store.getState().categories.categories.map(category => ({
                value: category.id.toString(),
                label: category.title,
            })));
        })
    }, [])
    //@ts-ignore
    const selectChangeHandler = (category) => {
        dispatch(getCategoryByIdAction(category.value)).then(() => {
            dispatch(getSubCategoryByCategoryAction(store.getState().categories.category.id)).then(() => {
                setCurrentSubCategories(store.getState().subCategories.subCategories.map(
                    subCategory => ({
                        value: subCategory.id.toString(),
                        label: subCategory.title,
                    })
                ))
            })
        })
    }*/
    }


    return (
        <>
            (
            <select onChange={categoryChangeHandler} className={classes.select}>
                <option>Выберите категорию</option>
                {
                    categories.map((category: any) =>
                        <CustomOption
                            placeholder={category.title}
                            value={category.id}
                            optionText={category.title}></CustomOption>)}
            </select>
            {category.id > 0 &&
                <SubCategoryForCreationList
                    subCategories={subCategories}></SubCategoryForCreationList>}

            {/*<div>
                {//@ts-ignore
                    <Select
                        options={currentCategory}
                        isSearchable={false}
                        onChange={selectChangeHandler}
                        placeholder={'Выберите категорию'}
                    />}
            </div>*/}


        </>
    )
}