import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import {CustomInput} from "../../inputs/custom.input";
import {AcceptButton} from "../../buttons/access.button";
import React, {useEffect, useState} from "react";
import {categoryUpdateAction, getCategoryByIdAction} from "../../../store";
import {useParams} from "react-router-dom";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'


export function CategoryUpdateForm() {
    const params: any = useParams();
    const dispatch: any = useDispatch();
    const {category} = useTypedSelector(state => state.categories);

    const [title, setTitle] = useState(category.title);

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
        }))
    }

    useEffect(() => {
        dispatch(getCategoryByIdAction(+params.id));
    }, [])

    return (
        <>
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