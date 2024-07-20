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
import {TextAreaInput} from "../../inputs/textArea.input";

//@ts-ignore
const tg: any = window.Telegram.WebApp;

export function ItemCreateForm() {

    const dispatch: any = useDispatch();
    const params: any = useParams();

    const {category} = useTypedSelector(state => state.categories);
    const {subCategory} = useTypedSelector(state => state.subCategories);
    const {city} = useTypedSelector(state => state.cities);

    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState('');
    const [image, setImage] = useState("");
    const [forSale, setForSale] = useState(false);
    const [forBuying, setForBuying] = useState(false);
    const [owner, setOwner] = useState(params.chatId.toString());


    const [titleNotOk, setTitleNotOk] = useState(false);
    const [descriptionNotOk, setDescriptionNotOk] = useState(false);
    const [saleAndBuyNotOk, setSaleAndBuyNotOk] = useState(false);
    const [priceNotOk, setPriceNotOk] = useState(false);
    const [priceLengthNotOk, setPriceLengthNotOk] = useState(false);

    const [showWarningMessage, setShowWarningMessage] = useState(false);
    const [existingFile, setExistingFile] = useState(false);

    const [titleWarningMessage, setTitleWarningMessage] = useState(false);

    const changeTextAreaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'image') {
            //@ts-ignore
            setImage(event.target?.files[0]?.name);
            //@ts-ignore
            setFile(event.target?.files[0])
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
            setForBuying(false)

        }
        if (event.target.name === 'forBuying') {
            setForBuying(!forBuying)
            setForSale(false)
        }
    }

    const randomizer = async (min: number, max: number): Promise<number> => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const clickHandler = async () => {
        if (price.split(' ').length < 2) {
            setPriceLengthNotOk(true);

            setShowWarningMessage(false);
            setPriceNotOk(false);
            setTitleNotOk(false);
            setDescriptionNotOk(false);
            setSaleAndBuyNotOk(false);
        }
        if (city.id === 0 || category.id === 0 || subCategory.id === 0) {
            setShowWarningMessage(true);

            setPriceNotOk(false);
            setTitleNotOk(false);
            setDescriptionNotOk(false);
            setSaleAndBuyNotOk(false);
            setPriceLengthNotOk(false);
        }

        if (title && category.id > 0 && subCategory.id > 0 && city.id > 0 && price && description &&
            (forSale || forBuying) && price.split(' ').length > 1) {
            if (await checkFileHandler(title, owner, image)) {
                dispatch(itemCreateAction({
                    title: title,
                    file: file ? file : null,
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
                    image: image ? image : `${await randomizer(1, 10000000)}` + '.jpeg'
                })).then(() => {
                    if (store.getState().items.item.title) {
                        setExistingFile(false);
                        tg.sendData(JSON.stringify({
                            createdItem: {
                                image: store.getState().items.item.image,
                                title: store.getState().items.item.title,
                                price: store.getState().items.item.price,
                                chatId: params.chatId
                            }
                        }))
                        tg.close()
                    } else {
                        setExistingFile(false);
                    }

                    //}
                })
            } else {


                setExistingFile(true)
            }

        } else {

            if (!forSale && !forBuying) {
                setSaleAndBuyNotOk(true);

                setDescriptionNotOk(false);
                setTitleNotOk(false);
                setPriceNotOk(false);
                setShowWarningMessage(false);
                setPriceLengthNotOk(false);

            } else if (!description) {
                setDescriptionNotOk(true);

                setSaleAndBuyNotOk(false);
                setTitleNotOk(false);
                setPriceNotOk(false);
                setShowWarningMessage(false);
                setPriceLengthNotOk(false);

            } else if (!title) {
                setTitleNotOk(true);

                setDescriptionNotOk(false);
                setSaleAndBuyNotOk(false);
                setPriceNotOk(false);
                setShowWarningMessage(false);
                setPriceLengthNotOk(false);

            } else if (!price) {
                setPriceNotOk(true);

                setTitleNotOk(false);
                setDescriptionNotOk(false);
                setSaleAndBuyNotOk(false);
                setShowWarningMessage(false);
                setPriceLengthNotOk(false);
            }
        }

    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }


    return (
        <>
            <form onSubmit={submitHandler} className={classes.form}>
                <h1>Форма создания товара</h1>
                {showWarningMessage ? <Message
                    text={`Вы не выбрали город/категорию/подкатегорию или не прикрепили фото товара`}></Message> : null}
                {existingFile ? <Message text={`Изображение с таким названием уже существует`}></Message> : null}
                {titleWarningMessage ? <Message
                    text={`В название использован запрещённый символ _, $, %, #, @, &, *, ^`}></Message> : null}

                {titleNotOk ? <Message text={`Не введено название товара`}></Message> : null}
                {descriptionNotOk ? <Message text={`Не введено описание товара`}></Message> : null}
                {saleAndBuyNotOk ?
                    <Message text={`Не отмечено товар для продажи или для покупки`}></Message> : null}
                {priceNotOk ? <Message text={`Не введена цена`}></Message> : null}

                {priceLengthNotOk ?
                    <Message text={`Цена должна быть в формате "2000 руб/т" или "2000 руб`}></Message> : null}

                <CityForCreationList currentCity={city}></CityForCreationList>
                <CategoryForCreationList currentCategory={category}
                                         currentSubCategory={subCategory}></CategoryForCreationList>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={'Название товара'}
                    name={'title'}
                    value={title}
                    changeHandler={changeHandler}></CustomInput>
                <CustomCheckbox
                    styles={classes.checkbox}
                    //disabled={buying}
                    type={'checkbox'}
                    text={'Хочу продать'}
                    checked={!forSale ? !!0 : !!1}
                    name={'forSale'}
                    changeHandler={changeHandler}></CustomCheckbox>
                <CustomCheckbox
                    styles={classes.checkbox}
                    //disabled={sale}
                    type={'checkbox'}
                    text={'Хочу купить'}
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
                <TextAreaInput
                    styles={classes.input}
                    name={'description'}
                    value={description}
                    changeHandler={changeTextAreaHandler}
                    placeholder={'Описание'}></TextAreaInput>
                <label className={classes.p}>В поле "выбрать файл" поместите фото товара</label>
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
