import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {store} from "../../../store/store";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import {Message} from "../../messages/message";
import {AcceptButton} from "../../buttons/access.button";
import {CustomInput} from "../../inputs/custom.input";
import {
    getAllCategoriesAction,
    getCategoryByIdAction,
    getSubCategoryByCategoryAction,
    subCategoryCreateAction
} from "../../../store";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'
import {CustomOption} from "../../selects/custom.option";
import {useParams} from "react-router-dom";
import {getUserByChatIdAction} from "../../../store/actionCreators/user/getUserByChatId.action";

//@ts-ignore
const tg: any = window.Telegram.WebApp;

export function SubCategoryCreateForm() {

    const params: any = useParams();
    const dispatch: any = useDispatch();

    const {user} = useTypedSelector(state => state.users);
    const {subCategory} = useTypedSelector(state => state.subCategories);
    const {category, categories} = useTypedSelector(state => state.categories);
    const [title, setTitle] = useState("");


    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const categoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(getCategoryByIdAction(+event.target.value)).then(() => {
            dispatch(getSubCategoryByCategoryAction(store.getState().categories.category.id))
        })
    }

    const clickHandler = async () => {
        dispatch(subCategoryCreateAction({
            title: title,
            categoryId: category.id,
            userId: user.id,
        })).then(() => {
            if (store.getState().categories.category.title) {
                setShowSuccessMessage(true);
                setShowWarningMessage(false);
                tg.close()
            } else {
                setShowSuccessMessage(false);
                setShowWarningMessage(true);
            }
        })
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }

    useEffect(() => {
        dispatch(getAllCategoriesAction());
        dispatch(getUserByChatIdAction(params.chatId.toString()));

    }, []);

    return (
        <>
            {showSuccessMessage ? <Message text={`Подкатегория ${subCategory.title} создана`}></Message> : null}
            {showWarningMessage ? <Message text={`Неверно введены данные`}></Message> : null}
            <h1 className={classes.subtitle}>Форма создания подкатегории товаров</h1>
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
                    name={''}
                    value={title}
                    changeHandler={changeHandler}></CustomInput>

                <AcceptButton
                    styles={classes.submit}
                    disabled={!category}
                    buttonText={'Создать'}
                    clickHandler={clickHandler}
                    name={'createCity'}></AcceptButton>
            </form>
        </>
    )
}