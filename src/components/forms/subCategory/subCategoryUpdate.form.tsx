import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import {CustomInput} from "../../inputs/custom.input";
import {AcceptButton} from "../../buttons/access.button";
import React, {useEffect, useState} from "react";
import {
    getAllCategoriesAction,
    getCategoryByIdAction,
    getSubCategoryByCategoryAction,
    getSubCategoryByIdAction,
    subCategoryUpdateAction
} from "../../../store";
import {useParams} from "react-router-dom";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'
import {store} from "../../../store/store";
import {Message} from "../../messages/message";
import {CustomOption} from "../../selects/custom.option";

//@ts-ignore
const tg: any = window.Telegram.WebApp;

export function SubCategoryUpdateForm() {
    const params: any = useParams();
    const dispatch: any = useDispatch();

    const {subCategory} = useTypedSelector(state => state.subCategories);
    const {category, categories} = useTypedSelector(state => state.categories);

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const [title, setTitle] = useState(subCategory.title);
    //Возможна ошибка!!!
    const [categoryId, setCategoryId] = useState(!category.id ? subCategory.categoryId : category);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);

    }

    const categoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(getCategoryByIdAction(+event.target.value)).then(() => {
            dispatch(getSubCategoryByCategoryAction(store.getState().categories.category.id));

        })

    }

    const clickHandler = () => {
        dispatch(subCategoryUpdateAction({
            id: +subCategory.id,
            title: title,
            categoryId: category.id
        },
            params.chatId
        )).then(() => {
            if (store.getState().subCategories.subCategory.title) {
                setShowSuccessMessage(true);
                setShowWarningMessage(false);
                tg.close()
            } else {
                setShowSuccessMessage(false);
                setShowWarningMessage(true);
            }
        })
    }

    useEffect(() => {
        dispatch(getAllCategoriesAction());
        dispatch(getSubCategoryByIdAction(+params.id))
    }, []);

    return (
        <>
            {showSuccessMessage ? <Message text={`Подкатегория ${subCategory.title} изменена`}></Message> : null}
            {showWarningMessage ? <Message text={`Неверно введены данные`}></Message> : null}
            <h1 className={classes.subtitle}>Форма изменения подкатегории</h1>
            <select onChange={categoryChangeHandler} className={classes.select}>
                <option>Выберите категорию</option>
                {
                    categories.map((category: any) =>
                        <CustomOption
                            placeholder={category.title}
                            value={category.id}
                            optionText={category.title}></CustomOption>)}
            </select>
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