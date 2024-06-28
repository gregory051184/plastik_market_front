import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {advertisementCreateAction} from "../../../store";
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

export function AdvertisementCreateForm() {

    const params: any = useParams();
    const dispatch: any = useDispatch();
    const {advertisement} = useTypedSelector(state => state.advertisements);
    const {user} = useTypedSelector(state => state.users);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    //const [startDate, setStartDate] = useState("");
    //const [finishDate, setFinishDate] = useState("");


    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'title') {
            setTitle(event.target.value);
        }
        if (event.target.name === 'price') {
            setPrice(+event.target.value)
        }
        if (event.target.name === 'description') {
            setDescription(event.target.value);
        }

    }

    const clickHandler = async () => {
        dispatch(advertisementCreateAction({
            title: title,
            price: price,
            description: description,
            userId: +user.id,
        })).then(() => {
            if (store.getState().advertisements.advertisement.title) {
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
        dispatch(getUserByChatIdAction(params.chatId));
    }, []);
    return (
        <>
            {showSuccessMessage ? <Message text={`Рекламный блок ${advertisement.title} создан`}></Message> : null}
            {showWarningMessage ? <Message text={`Неверно введены данные`}></Message> : null}
            <form onSubmit={submitHandler} className={classes.form}>
                <h1 className={classes.subtitle}>Форма создания категории товаров</h1>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Название блока'}
                    name={'title'}
                    value={title}
                    changeHandler={changeHandler}></CustomInput>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Цена'}
                    name={'price'}
                    value={price.toString()}
                    changeHandler={changeHandler}></CustomInput>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Описание'}
                    name={'description'}
                    value={description}
                    changeHandler={changeHandler}></CustomInput>
                <AcceptButton
                    styles={classes.submit}
                    buttonText={'Создать'}
                    clickHandler={clickHandler}
                    name={'createAdvertisement'}></AcceptButton>
            </form>
        </>
    )
}