import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {CustomInput} from "../inputs/custom.input";
import {AcceptButton} from "../buttons/access.button";
import {useTypedSelector} from "../../hooks/useTyped.selector";
import {CityForCreationList} from "../lists/cities/cityForCreation.list";
import {CustomCheckbox} from "../inputs/custom.checkbox";
import {
    getAllCategoriesAction, getAllSubCategoriesAction,
    getCategoryByIdAction,
    getSubCategoryByIdAction,
    itemFilterAction
} from "../../store";
import {Message} from "../messages/message";
// @ts-ignore
import classes from '../../styles/forms/form.module.css'
import {CustomOption} from "../selects/custom.option";
import {useParams} from "react-router-dom";


//@ts-ignore
const tg: any = window.Telegram.WebApp;

export function ItemsFilter() {

    const dispatch: any = useDispatch();
    const params: any = useParams();

    const {items} = useTypedSelector(state => state.items);
    const {category, categories} = useTypedSelector(state => state.categories);
    const {subCategory, subCategories} = useTypedSelector(state => state.subCategories);
    const {city} = useTypedSelector(state => state.cities);

    const [title, setTitle] = useState("");
    const [forSale, setForSale] = useState(false);
    const [forBuying, setForBuying] = useState(false);


    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }

    const subCategoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(getSubCategoryByIdAction(+event.target.value))
    }

    const categoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(getCategoryByIdAction(+event.target.value));

    }

    useEffect(() => {
        dispatch(getAllCategoriesAction());
        dispatch(getAllSubCategoriesAction());
    }, []);


    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'title') {
            setTitle(event.target.value);
        }
        if (event.target.name === 'forSale') {
            setForSale(true);
            setForBuying(false);
        }
        if (event.target.name === 'forBuying') {
            setForBuying(true);
            setForSale(false);
        }

    }

    const clickHandler = async () => {
        if ((forBuying || forSale) && (title.length > 0 || subCategory.id > 0 ||
            category.id > 0 || city.id > 0)) {
            dispatch(itemFilterAction({
                title: title,
                forSale: forSale,
                category: category.id,
                subCategory: subCategory.id,
                city: city.id,
            }, params.chatId)).then(() => {

                setShowWarningMessage(false);
                tg.sendData(JSON.stringify({
                    filter: {
                        title: title,
                        forSale: forSale,
                        category: category.id,
                        subCategory: subCategory.id,
                        city: city.id,
                        chatId: params.chatId
                    }
                }))
                tg.close()
                setShowWarningMessage(false);

            })
        }else {
            setShowWarningMessage(true);
        }
    }

    return (
        <>


            <form onSubmit={submitHandler} className={classes.form}>
                <h1>Фильтрация товаров</h1>
                <h3 className={classes.p}>Обязательно выберите ""для покупки" или "для продажи"</h3>
                {showWarningMessage ? <Message text={`Неверно введены данные`}></Message> : null}
                <CityForCreationList currentCity={city}></CityForCreationList>
                <select onChange={categoryChangeHandler} className={classes.select}>
                    <option>{'Выберите категорию'}</option>
                    {
                        categories.map((category: any) =>
                            <CustomOption
                                key={category.id}
                                placeholder={category.title}
                                value={category.id}
                                optionText={category.title}></CustomOption>)}
                </select>

                <select onChange={subCategoryChangeHandler} className={classes.select}>
                    <option>{'Выберите подкатегорию'}</option>
                    {
                        subCategories
                            .map((subCategory: any) =>
                                <CustomOption
                                    key={subCategory.id}
                                    placeholder={subCategory.title}
                                    value={subCategory.id}
                                    optionText={subCategory.title}></CustomOption>)
                    }
                </select>

                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Название товара'}
                    name={'title'}
                    value={title}
                    changeHandler={changeHandler}></CustomInput>
                <CustomCheckbox
                    styles={classes.checkbox}
                    type={'checkbox'}
                    text={'Для продажи'}
                    checked={!forSale ? !!0 : !!1}
                    name={'forSale'}
                    changeHandler={changeHandler}></CustomCheckbox>
                <CustomCheckbox
                    styles={classes.checkbox}
                    type={'checkbox'}
                    text={'Для покупки'}
                    checked={!forBuying ? !!0 : !!1}
                    name={'forBuying'}
                    changeHandler={changeHandler}></CustomCheckbox>
                <AcceptButton
                    styles={classes.submit}
                    buttonText={'Найти'}
                    clickHandler={clickHandler}
                    name={'createAdvertisement'}></AcceptButton>
            </form>
        </>
    )
}