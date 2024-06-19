import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import {CustomInput} from "../../inputs/custom.input";
import {AcceptButton} from "../../buttons/access.button";
import React, {useEffect, useState} from "react";
import {getUserByIdAction, userUpdateAction} from "../../../store";
import {useParams} from "react-router-dom";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css';
import {store} from "../../../store/store";
import {Message} from "../../messages/message";

//@ts-ignore
const tg: any = window.Telegram.WebApp;

export function UserUpdateFrom() {
    const params: any = useParams();
    const dispatch: any = useDispatch();
    const {user} = useTypedSelector(state => state.users);


    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [contactPerson, setContactPerson] = useState(user.contactPerson);
    const [address, setAddress] = useState(user.address);

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showWarningMessage, setShowWarningMessage] = useState(false);


    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

    useEffect(() => {
        dispatch(getUserByIdAction(+params.id))
    }, []);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'contactPerson') {
            setContactPerson(event.target.value)
        }
        if (event.target.name === 'address') {
            setAddress(event.target.value)
        }
        if (event.target.name === 'phone') {
            setPhone(event.target.value)
        }
        if (event.target.name === 'email') {
            setEmail(event.target.value)
        }
    }

    useEffect(() => {

    }, []);

    const clickHandler = () => {
        dispatch(userUpdateAction({
            id: +params.id,
            contactPerson: contactPerson,
            phone: phone,
            email: email,
            address: address
        })).then(() => {
            if (store.getState().users.user.id) {
                setShowSuccessMessage(true);
                setShowWarningMessage(false);
            } else {
                setShowSuccessMessage(false);
                setShowWarningMessage(true);
            }
        })
    }

    useEffect(() => {
        dispatch(getUserByIdAction(+params.id))
    }, []);

    return (
        <>
            {showSuccessMessage ?
                <Message text={`Информация о пользователь ${user.firstName} изменена`}></Message> : null}
            {showWarningMessage ? <Message text={`Неверно введены данные`}></Message> : null}

            <form onSubmit={submitHandler} className={classes.form}>
                <h1 className={classes.subtitle}>Форма изменения профиля</h1>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Контактное лицо'}
                    name={'contactPerson'}
                    changeHandler={changeHandler}
                    value={contactPerson}></CustomInput>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Номер телефона'}
                    name={'phone'}
                    changeHandler={changeHandler}
                    value={phone}></CustomInput>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'email'}
                    name={'email'}
                    changeHandler={changeHandler}
                    value={email}></CustomInput>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Адрес'}
                    name={'address'}
                    changeHandler={changeHandler}
                    value={address}></CustomInput>
                <AcceptButton
                    styles={classes.submit}
                    clickHandler={clickHandler}
                    buttonText={'Изменить'}
                    name={'updateButton'}></AcceptButton>
            </form>
        </>
    )
}