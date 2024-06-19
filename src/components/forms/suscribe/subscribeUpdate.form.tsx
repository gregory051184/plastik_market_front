import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import {CustomInput} from "../../inputs/custom.input";
import {AcceptButton} from "../../buttons/access.button";
import React, {useEffect, useState} from "react";
import {getSubscribeByIdAction, subscribeUpdateAction} from "../../../store";
import {useParams} from "react-router-dom";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'


export function SubscribeUpdateForm() {
    const params: any = useParams();
    const dispatch: any = useDispatch();
    const {subscribe} = useTypedSelector(state => state.subscribes);

    const [title, setTitle] = useState(subscribe.title);
    const [price, setPrice] = useState(subscribe.price);
    const [description, setDescription] = useState(subscribe.description);
    const [months, setMonths] = useState(subscribe.months);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

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
        if (event.target.name === 'months') {
            setMonths(+event.target.value)
        }
    }

    const clickHandler = () => {
        dispatch(subscribeUpdateAction({
            id: subscribe.id,
            title: subscribe.title,
            price: subscribe.price,
            description: subscribe.description,
            months: subscribe.months
        }))
    }

    useEffect(() => {
        dispatch(getSubscribeByIdAction(+params.id))
    }, []);

    return (
        <>
            <form onSubmit={submitHandler} className={classes.form}>
                <h1 className={classes.subtitle}>Форма изменения города</h1>
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
                    value={price.toString()}
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
                    placeholder={'Цена'}
                    name={'months'}
                    value={months.toString()}
                    changeHandler={changeHandler}></CustomInput>
                <AcceptButton
                    styles={classes.submit}
                    clickHandler={clickHandler}
                    buttonText={'Изменить'}
                    name={'updateButton'}></AcceptButton>
            </form>
        </>
    )
}