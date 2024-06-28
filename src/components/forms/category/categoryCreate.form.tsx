import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {categoryCreateAction} from "../../../store";
import {store} from "../../../store/store";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import {Message} from "../../messages/message";
import {AcceptButton} from "../../buttons/access.button";
import {CustomInput} from "../../inputs/custom.input";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'
import {useParams} from "react-router-dom";
import {getUserByChatIdAction} from "../../../store/actionCreators/user/getUserByChatId.action";

//@ts-ignore
const tg: any = window.Telegram.WebApp;

export function CategoryCreateForm() {

    const params: any = useParams();
    const dispatch: any = useDispatch();
    const {category} = useTypedSelector(state => state.categories);
    const {user} = useTypedSelector(state => state.users);

    const [title, setTitle] = useState("");


    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const clickHandler = async () => {
        dispatch(categoryCreateAction({
            title: title,
            userId: +user.id
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
        dispatch(getUserByChatIdAction(params.chatId.toString()));
    }, []);

    return (
        <>
            {showSuccessMessage ? <Message text={`Категория ${category.title} создана`}></Message> : null}
            {showWarningMessage ? <Message text={`Неверно введены данные`}></Message> : null}
            <form onSubmit={submitHandler} className={classes.form}>
                <h1 className={classes.subtitle}>Форма создания категории товаров</h1>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Название категории'}
                    name={'title'}
                    value={title}
                    changeHandler={changeHandler}></CustomInput>
                <AcceptButton
                    styles={classes.submit}
                    buttonText={'Создать'}
                    clickHandler={clickHandler}
                    name={'createCity'}></AcceptButton>
            </form>
        </>
    )
}