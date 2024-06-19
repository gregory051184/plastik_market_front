import React from "react";
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

export function CategoryCreateForm() {

    const dispatch: any = useDispatch();
    const {category} = useTypedSelector(state => state.categories);
    const [title, setTitle] = useState("");


    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const clickHandler = async () => {
        dispatch(categoryCreateAction({title: title})).then(() => {
            if (store.getState().categories.category.title) {
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