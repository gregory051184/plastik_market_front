import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {
    getAllCategoriesAction,
    getAllCitiesAction,
    getAllSubCategoriesAction,
    getItemByIdAction,
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

//@ts-ignore
const tg: any = window.Telegram.WebApp;

export function ItemUpdateForm() {

    const params: any = useParams();
    const dispatch: any = useDispatch();

    const {category} = useTypedSelector(state => state.categories);
    const {subCategory} = useTypedSelector(state => state.subCategories);
    const {item} = useTypedSelector(state => state.items);
    const {city} = useTypedSelector(state => state.cities);

    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState(item.title);
    const [price, setPrice] = useState(item.price.toString() + ' ' + item.unitOfMeasurement);
    const [description, setDescription] = useState(item.description);
    const [image, setImage] = useState(item.image);
    const [forSale, setForSale] = useState(item.forSale);
    const [forBuying, setForBuying] = useState(item.forBuying);

    const [priceLengthNotOk, setPriceLengthNotOk] = useState(false);

    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const [titleWarningMessage, setTitleWarningMessage] = useState(false);

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
            setPrice(event.target.value)
        }

        if (event.target.name === 'description') {
            setDescription(event.target.value);
        }

        if (event.target.name === 'forSale') {
            setForSale(!forSale)
            //setSale(!sale)
            setForBuying(false)

        }
        if (event.target.name === 'forBuying') {
            setForBuying(!forBuying)
            //setBuying(!buying)
            setForSale(false)
        }
    }

    const clickHandler = async () => {
        if (price.split(' ').length < 2) {
            setPriceLengthNotOk(true);
        } else {
            dispatch(itemUpdateAction({
                id: item.id,
                title: title ? title : item.title,
                file: file ? file : null,
                category: category.id > 0 ? category.id : item.category.id,//itemCategory ? +itemCategory : +item.category.id,
                city: city.id > 0 ? city.id : +item.city.id,//itemCity ? +itemCity : +item.city.id,
                unitOfMeasurement: price.split(' ')[1] ? price.split(' ')[1] : item.unitOfMeasurement,
                forSale: forSale === false && forBuying === false ? item.forSale : forSale,
                forBuying: forSale === false && forBuying === false ? item.forBuying : forBuying,
                subCategory: subCategory.id > 0 ? subCategory.id : +item.subCategory.id,
                description: description ? description : item.description,
                price: +price.split(' ')[0] ? +price.split(' ')[1] : +item.price,
                image: image ? image : item.image,
                owner: params.chatId
            })).then(() => {
                if (store.getState().items.item.title) {
                    //setShowSuccessMessage(true);
                    setShowWarningMessage(false);
                    tg.sendData(JSON.stringify({updatedItem: {chatId: params.chatId}}))
                    tg.close()
                } else {
                    setShowWarningMessage(true);
                }
            })
        }
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <>


            <form onSubmit={submitHandler} className={classes.form}>

                {showWarningMessage ? <Message text={`Неверно введены данные`}></Message> : null}

                {titleWarningMessage ? <Message
                    text={`В название использован запрещённый символ _, $, %, #, @, &, *, ^`}></Message> : null}

                {priceLengthNotOk ?
                    <Message text={`Цена должна быть в формате "2000 руб/т" или "2000 руб`}></Message> : null}

                <CityForCreationList currentCity={item.city}></CityForCreationList>
                <CategoryForCreationList currentCategory={item.category}
                                         currentSubCategory={item.subCategory}></CategoryForCreationList>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={item.title}
                    name={'title'}
                    value={title}
                    changeHandler={changeHandler}></CustomInput>
                <CustomCheckbox
                    styles={classes.checkbox}
                    type={'checkbox'}
                    text={'Хочу продать'}
                    checked={!forSale ? !!0 : !!1}
                    name={'forSale'}
                    changeHandler={changeHandler}></CustomCheckbox>
                <CustomCheckbox
                    styles={classes.checkbox}
                    type={'checkbox'}
                    text={'Хочу купить'}
                    checked={!forBuying ? !!0 : !!1}
                    name={'forBuying'}
                    changeHandler={changeHandler}></CustomCheckbox>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={item.price.toString() + item.unitOfMeasurement}
                    name={'price'}
                    value={price}
                    changeHandler={changeHandler}></CustomInput>
                <CustomInput
                    styles={classes.input}
                    type={'text'}
                    placeholder={item.description}
                    name={'description'}
                    value={description}
                    changeHandler={changeHandler}></CustomInput>

                <label className={classes.p}>В поле "выбрать файл" поместите фото товара</label>
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