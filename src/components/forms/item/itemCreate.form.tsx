import React from "react";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {itemCreateAction} from "../../../store";
import {store} from "../../../store/store";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import {Message} from "../../messages/message";
import {AcceptButton} from "../../buttons/access.button";
import {CustomInput} from "../../inputs/custom.input";
import {CategoryForCreationList} from "../../lists/category/categoryForCreation.list";
import {CustomCheckbox} from "../../inputs/custom.checkbox";
import {CityForCreationList} from "../../lists/cities/cityForCreation.list";
import {useParams} from "react-router-dom";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'
import {checkFileHandler} from "../../../handlers";

//@ts-ignore
const tg: any = window.Telegram.WebApp;

export function ItemCreateForm() {

    const dispatch: any = useDispatch();
    const params: any = useParams();

    const {category} = useTypedSelector(state => state.categories);
    const {subCategory} = useTypedSelector(state => state.subCategories);
    const {item} = useTypedSelector(state => state.items);
    const {city} = useTypedSelector(state => state.cities);

    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState('');
    const [image, setImage] = useState("");
    const [forSale, setForSale] = useState(false);
    const [forBuying, setForBuying] = useState(false);
    const [owner, setOwner] = useState(params.chatId.toString());


    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showWarningMessage, setShowWarningMessage] = useState(false);
    const [existingFile, setExistingFile] = useState(false);

    const [titleWarningMessage, setTitleWarningMessage] = useState(false);

    const [sale, setSale] = useState(false);
    const [buying, setBuying] = useState(false);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'image') {
            //@ts-ignore
            setImage(event.target.files[0].name);
            //@ts-ignore
            setFile(event.target.files[0])
        }
        if (event.target.name === 'title') {
            if (!!event.target.value.match(/[$#*_^%&@]/g)) {
                setTitleWarningMessage(true)
            } else {
                setTitle(event.target.value);
                setTitleWarningMessage(false)
            }

        }
        if (event.target.name === 'price') {
            setPrice(event.target.value)
        }
        if (event.target.name === 'description') {
            setDescription(event.target.value);
        }
        // возможна ошибка
        if (event.target.name === 'forSale') {
            setForSale(!forSale)
            setSale(!sale)

        }
        if (event.target.name === 'forBuying') {
            setForBuying(!forBuying)
            setBuying(!buying)
        }
    }

    const clickHandler = async () => {
        if (title && category && subCategory && city && price && description && (forSale || forBuying)) {
            if (await checkFileHandler(title, owner, image)) {
                dispatch(itemCreateAction({
                    title: title,
                    file: file,
                    categoryId: category.id,
                    cityId: city.id,
                    owner: owner,
                    unitOfMeasurement: price.split(' ')[1],
                    sold: false,
                    forSale: forSale,
                    forBuying: forBuying,
                    subCategoryId: subCategory.id,
                    description: description,
                    price: +price.split(' ')[0],
                    image: image
                })).then(() => {
                    if (store.getState().items.item.title) {
                        setShowSuccessMessage(true);
                        setShowWarningMessage(false);
                        setExistingFile(false);
                        tg.close()
                    } else {
                        setShowSuccessMessage(false);
                        setShowWarningMessage(true);
                        setExistingFile(false);
                    }
                })
            } else {
                setExistingFile(true)
            }
        } else {
            setShowWarningMessage(true);
            setShowSuccessMessage(false);
        }

    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }


    return (
        <>

            <form onSubmit={submitHandler} className={classes.form}>
                <h1>Форма создания товара</h1>
                {showSuccessMessage ? <Message text={`Товар ${item.title} создан`}></Message> : null}
                {showWarningMessage ? <Message text={`Неверно введены данные`}></Message> : null}
                {existingFile ? <Message text={`Изображение с таким названием уже существует`}></Message> : null}
                {titleWarningMessage ? <Message
                    text={`В название использован запрещённый символ _, $, %, #, @, &, *, ^`}></Message> : null}

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
                    disabled={!title && !category && !subCategory}
                    buttonText={'Создать'}
                    clickHandler={clickHandler}
                    name={'createCity'}></AcceptButton>
            </form>
        </>

    )
}