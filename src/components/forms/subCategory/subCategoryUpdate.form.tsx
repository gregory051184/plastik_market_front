import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import {CustomInput} from "../../inputs/custom.input";
import {AcceptButton} from "../../buttons/access.button";
import React, {useEffect, useState} from "react";
import {getSubCategoryByIdAction, subCategoryUpdateAction} from "../../../store";
import {CategoryForCreationList} from "../../lists/category/categoryForCreation.list";
import {useParams} from "react-router-dom";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'


export function SubCategoryUpdateForm() {
    const params: any = useParams();
    const dispatch: any = useDispatch();
    const {subCategory} = useTypedSelector(state => state.subCategories);
    const {category} = useTypedSelector(state => state.categories);

    const [title, setTitle] = useState(subCategory.title);
    //Возможна ошибка!!!
    const [categoryId, setCategoryId] = useState(!category.id ? subCategory.categoryId : category);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);

    }

    const clickHandler = () => {
        dispatch(subCategoryUpdateAction({
            id: +subCategory.id,
            title: title,
            categoryId: categoryId
        }))
    }

    useEffect(() => {
        dispatch(getSubCategoryByIdAction(+params.id))
    }, []);

    return (
        <>
            <h1 className={classes.subtitle}>Форма изменения города</h1>
            <CategoryForCreationList></CategoryForCreationList>
            <form onSubmit={submitHandler} className={classes.form}>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Название подкатегории'}
                    name={'title'}
                    changeHandler={changeHandler}
                    value={title}></CustomInput>
                <AcceptButton
                    styles={classes.submit}
                    clickHandler={clickHandler}
                    buttonText={'Изменить'}
                    name={'updateButton'}></AcceptButton>
            </form>
        </>
    )
}