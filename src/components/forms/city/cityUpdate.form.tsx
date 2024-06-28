import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import {CustomInput} from "../../inputs/custom.input";
import {AcceptButton} from "../../buttons/access.button";
import React, {useEffect, useState} from "react";
import {cityUpdateAction, getCityByIdAction} from "../../../store";
import {useParams} from "react-router-dom";
import {store} from "../../../store/store";
import {Message} from "../../messages/message";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'

//@ts-ignore
const tg: any = window.Telegram.WebApp;

export function CityUpdateForm() {
    const params: any = useParams();
    const dispatch: any = useDispatch();
    const {city} = useTypedSelector(state => state.cities);

    const [title, setTitle] = useState(city.title);

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);

    }

    const clickHandler = () => {
        dispatch(cityUpdateAction({
                id: +city.id,
                title: title
            },
            params.chatId)).then(() => {
            if (store.getState().cities.city.title) {
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
        dispatch(getCityByIdAction(+params.id));

    }, []);

    return (
        <>
            {showSuccessMessage ? <Message text={`Город ${city.title} изменён`}></Message> : null}
            {showWarningMessage ? <Message text={`Неверно введены данные`}></Message> : null}
            <form onSubmit={submitHandler} className={classes.form}>
                <h1 className={classes.subtitle}>Форма изменения города</h1>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Новое название города'}
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