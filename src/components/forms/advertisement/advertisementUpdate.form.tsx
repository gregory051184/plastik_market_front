import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import {CustomInput} from "../../inputs/custom.input";
import {AcceptButton} from "../../buttons/access.button";
import React, {useEffect, useState} from "react";
import {advertisementUpdateAction, getAdvertisementByIdAction} from "../../../store";
import {useParams} from "react-router-dom";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'


export function AdvertisementUpdateForm() {
    const params: any = useParams();
    const dispatch: any = useDispatch();
    const {advertisement} = useTypedSelector(state => state.advertisements);

    const [title, setTitle] = useState(advertisement.title);
    const [price, setPrice] = useState(advertisement.price);
    const [description, setDescription] = useState(advertisement.description);


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

    }

    const clickHandler = () => {
        dispatch(advertisementUpdateAction({
            id: +advertisement.id,
            title: title,
            price: price,
            description: description
        }))
    }

    useEffect(() => {
        dispatch(getAdvertisementByIdAction(+params.id));
    }, [])

    return (
        <>
            <form onSubmit={submitHandler} className={classes.form}>
                <h1 className={classes.subtitle}>Форма изменения рекламных блоков</h1>
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
                    buttonText={'Изменить'}
                    clickHandler={clickHandler}
                    name={'updateAdvertisement'}></AcceptButton>
            </form>
        </>
    )
}