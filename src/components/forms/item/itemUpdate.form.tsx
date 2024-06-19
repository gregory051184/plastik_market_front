import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {
    getAllCategoriesAction,
    getAllCitiesAction,
    getAllSubCategoriesAction, getCategoryByIdAction, getCityByIdAction,
    getItemByIdAction, getSubCategoryByIdAction,
    itemUpdateAction
} from "../../../store";
import {store} from "../../../store/store";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import {Message} from "../../messages/message";
import {AcceptButton} from "../../buttons/access.button";
import {CustomInput} from "../../inputs/custom.input";
import {CustomCheckbox} from "../../inputs/custom.checkbox";
import {useParams} from "react-router-dom";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'
import {CityForCreationList} from "../../lists/cities/cityForCreation.list";
import {CategoryForCreationList} from "../../lists/category/categoryForCreation.list";
import {itemTitleException} from "../../../exсeptions/itemTitle.exсeption";

//@ts-ignore
const tg: any = window.Telegram.WebApp;

export function ItemUpdateForm() {

    const params: any = useParams();
    const dispatch: any = useDispatch();

    const {categories, category} = useTypedSelector(state => state.categories);
    const {subCategories, subCategory} = useTypedSelector(state => state.subCategories);
    const {item} = useTypedSelector(state => state.items);
    const {cities, city} = useTypedSelector(state => state.cities);

    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState(item.title);
    const [price, setPrice] = useState(`${item.price} ` + item.unitOfMeasurement);
    const [description, setDescription] = useState(item.description);
    const [image, setImage] = useState(item.image);
    const [forSale, setForSale] = useState(item.forSale);
    const [forBuying, setForBuying] = useState(item.forBuying);

    const [itemCity, setItemCity] = useState(item.city.id);
    const [itemCategory, setItemCategory] = useState(item.category.id);
    const [itemSubCategory, setItemSubCategory] = useState(item.subCategory.id);

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const [titleWarningMessage, setTitleWarningMessage] = useState(false);

    const [sale, setSale] = useState(false);
    const [buying, setBuying] = useState(false);

    const [showSubCategoriesSelect, setShowSubCategoriesSelect] = useState(false);

    useEffect(() => {
        dispatch(getItemByIdAction(+params.id));
        dispatch(getAllCitiesAction());
        dispatch(getAllCategoriesAction());
        dispatch(getAllSubCategoriesAction());
    }, []);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.name === 'image') {
            //@ts-ignore
            setImage(event.target.files[0].name);
            //@ts-ignore
            setFile(event.target.files[0])
        }

        if (event.target.name === 'title') {
            //setTitle(event.target.value);
            if (!!event.target.value.match(/[$#*_^%&@]/g)) {
                setTitleWarningMessage(true)
            } else {
                setTitle(event.target.value);
                setTitleWarningMessage(false)
            }
        }

        if (event.target.name === 'price') {
            //const price = +event.target.value.split(' ')[0];
            //const unit = event.target.value.split(' ')[1];
            setPrice(event.target.value)
        }

        if (event.target.name === 'description') {
            setDescription(event.target.value);
        }
        // возможна ошибка
        /*if (event.target.name === 'forSale') {
            setForSale(!!event.target.name);
        }
        if (event.target.name === 'forBuying') {
            setForBuying(!!event.target.name);
        }*/
        if (event.target.name === 'forSale') {
            setForSale(!forSale)
            setSale(!sale)

        }
        if (event.target.name === 'forBuying') {
            setForBuying(!forBuying)
            setBuying(!buying)
        }
    }

    const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(getCityByIdAction(+event.target.value)).then(() => {
            setItemCity(store.getState().cities.city.id)
        })

    }

    /*const categoryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getCategoryByIdAction(+event.target.name)).then(() => {
            setItemCategory(store.getState().categories.category.id)
        })

    }*/

    const categoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(getCategoryByIdAction(+event.target.value)).then(() => {
            setItemCategory(store.getState().categories.category.id)
        }).then(() => {
            if (store.getState().categories.category.title === 'Пластик') {
                setShowSubCategoriesSelect(prev => !prev)
            }
            if (store.getState().categories.category.title !== 'Пластик') {
                setShowSubCategoriesSelect(false)
            }
        })
    }

    /*const subCategoryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getSubCategoryByIdAction(+event.target.name)).then(() => {
            setItemSubCategory(store.getState().subCategories.subCategory.id)
        })

    }*/

    const subCategoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(getSubCategoryByIdAction(+event.target.value)).then(() => {
            setItemSubCategory(store.getState().subCategories.subCategory.id)
        })

    }

    const clickHandler = async () => {
        dispatch(itemUpdateAction({
            id: item.id,
            title: title,
            file: file,
            category: itemCategory,
            city: itemCity,
            unitOfMeasurement: price.split(' ')[1],
            forSale: forSale,
            forBuying: forBuying,
            subCategory: itemSubCategory,
            description: description,
            price: +price.split(' ')[0],
            image: image,
            owner: params.chatId
        })).then(() => {
            if (store.getState().items.item.title) {
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
            {showSuccessMessage ? <Message text={`Товар ${item.title} изменён`}></Message> : null}
            {showWarningMessage ? <Message text={`Неверно введены данные`}></Message> : null}

            {titleWarningMessage ? <Message
                text={`В название использован запрещённый символ _, $, %, #, @, &, *, ^`}></Message> : null}
            {/*<h1>Форма изменения товара</h1>*/}
            {/*<select onChange={selectHandler}>
                <option>Выберите город</option>
                {cities.map((city: any): any =>
                    <CustomOption
                        placeholder={city.title}
                        value={city.id}
                        optionText={city.title}></CustomOption>
                )}
            </select>*/}
            {/*<h2>Выберите категорию</h2>*/}
            {/*<select onChange={categoryChangeHandler}>
                <option>Выберите категорию</option>
                {
                    categories.map((category: any) =>
                        <CustomOption
                            placeholder={category.title}
                            value={category.id}
                            optionText={category.title}></CustomOption>)}
            </select>*/}
            {/*categories.map((category: any) =>
                <CustomCheckbox
                    type={'checkbox'}
                    changeHandler={categoryChangeHandler}
                    name={`${category.id}`}
                    checked={category.id === store.getState().categories.category.id ? !!1 : !!0}
                    text={category.title}></CustomCheckbox>
            )*/}
            {/*showSubCategoriesSelect && <h2>Выберите подкатегорию</h2>*/}
            {/*showSubCategoriesSelect && <select onChange={subCategoryChangeHandler}>
                <option>Выберите подкатегорию</option>
                {
                    subCategories.map((subCategory: any) =>
                        <CustomOption
                            placeholder={subCategory.title}
                            value={subCategory.id}
                            optionText={subCategory.title}></CustomOption>)}
            </select>*/}

            {/*subCategories.map((subCategory: any) =>
                <CustomCheckbox
                    type={'checkbox'}
                    changeHandler={subCategoryChangeHandler}
                    name={`${subCategory.id}`}
                    checked={subCategory.id === store.getState().subCategories.subCategory.id ? !!1 : !!0}
                    //checked={!checked ? !!0 : !!1}
                    text={subCategory.title}></CustomCheckbox>
            )*/}

            <form onSubmit={submitHandler} className={classes.form}>
                <CityForCreationList></CityForCreationList>
                <CategoryForCreationList></CategoryForCreationList>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Название товара'}
                    name={'title'}
                    value={title}
                    changeHandler={changeHandler}></CustomInput>
                <CustomCheckbox
                    styles={classes.checkbox}
                    disabled={buying}
                    type={'checkbox'}
                    text={'Для продажи'}
                    checked={!forSale ? !!0 : !!1}
                    name={'forSale'}
                    changeHandler={changeHandler}></CustomCheckbox>
                <CustomCheckbox
                    styles={classes.checkbox}
                    disabled={sale}
                    type={'checkbox'}
                    text={'Для покупки'}
                    checked={!forBuying ? !!0 : !!1}
                    name={'forBuying'}
                    changeHandler={changeHandler}></CustomCheckbox>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Цена в формате "2000 руб/т" или "2000 руб"'}
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
                    type={'file'}
                    name={'image'}
                    accept={'image/*,.png,.jpg,.gif,.web'}
                    changeHandler={changeHandler}></CustomInput>
                <AcceptButton
                    styles={classes.submit}
                    buttonText={'Изменить'}
                    clickHandler={clickHandler}
                    name={'changeItem'}></AcceptButton>
            </form>
        </>
    )
}