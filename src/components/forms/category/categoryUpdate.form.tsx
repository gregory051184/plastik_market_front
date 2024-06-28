 import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import {CustomInput} from "../../inputs/custom.input";
import {AcceptButton} from "../../buttons/access.button";
import React, {useEffect, useState} from "react";
import {categoryUpdateAction, getCategoryByIdAction} from "../../../store";
import {useParams} from "react-router-dom";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'
 import {store} from "../../../store/store";
 import {Message} from "../../messages/message";

 //@ts-ignore
 const tg: any = window.Telegram.WebApp;

export function CategoryUpdateForm() {
    const params: any = useParams();
    const dispatch: any = useDispatch();
    const {category} = useTypedSelector(state => state.categories);

    const [title, setTitle] = useState(category.title);

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);

    }

    const clickHandler = () => {
        dispatch(categoryUpdateAction({
            id: +category.id,
            title: title
        },
            params.chatId.toString()
            )).then(() => {
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

    useEffect(() => {
        dispatch(getCategoryByIdAction(+params.id));
    }, [])

    return (
        <>
            {showSuccessMessage ? <Message text={`Категория ${category.title} изменена`}></Message> : null}
            {showWarningMessage ? <Message text={`Неверно введены данные`}></Message> : null}
            <form onSubmit={submitHandler} className={classes.form}>
                <h1 className={classes.subtitle}>Форма изменения категории</h1>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Название категории'}
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