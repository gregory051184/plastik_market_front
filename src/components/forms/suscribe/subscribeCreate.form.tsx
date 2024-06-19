import React from "react";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {subscribeCreateAction} from "../../../store";
import {store} from "../../../store/store";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import {Message} from "../../messages/message";
import {AcceptButton} from "../../buttons/access.button";
import {CustomInput} from "../../inputs/custom.input";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'

export function SubscribeCreateForm() {

    const dispatch: any = useDispatch();
    const {subscribe} = useTypedSelector(state => state.subscribes);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState("");
    const [months, setMonths] = useState('');


    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'title') {
            setTitle(event.target.value);
        }
        if (event.target.name === 'price') {
            setPrice(event.target.value)
        }
        if (event.target.name === 'description') {
            setDescription(event.target.value);
        }
        if (event.target.name === 'months') {
            setMonths(event.target.value)
        }
    }

    const clickHandler = async () => {
        dispatch(subscribeCreateAction({
            title: title,
            price: +price,
            description: description,
            months: +months
        })).then(() => {
            if (store.getState().subscribes.subscribe.title) {
                setShowSuccessMessage(true);
                setShowWarningMessage(false);
            } else {
                setShowSuccessMessage(false);
                setShowWarningMessage(true);
            }
        })
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <>
            {showSuccessMessage ? <Message text={`Подписка ${subscribe.title} создана`}></Message> : null}
            {showWarningMessage ? <Message text={`Неверно введены данные`}></Message> : null}
            <form onSubmit={submitHandler} className={classes.form}>
                <h1 className={classes.subtitle}>Форма создания подписки</h1>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Название подписки'}
                    name={'title'}
                    value={title}
                    changeHandler={changeHandler}></CustomInput>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Цена'}
                    name={'price'}
                    value={price}
                    changeHandler={changeHandler}></CustomInput>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Описание'}
                    name={'description'}
                    value={description}
                    changeHandler={changeHandler}></CustomInput>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Месяцев'}
                    name={'months'}
                    value={months}
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