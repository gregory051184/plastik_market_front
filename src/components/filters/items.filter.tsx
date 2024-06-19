import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {CustomInput} from "../inputs/custom.input";
import {AcceptButton} from "../buttons/access.button";
import {useTypedSelector} from "../../hooks/useTyped.selector";
import {CityForCreationList} from "../lists/cities/cityForCreation.list";
import {CategoryForCreationList} from "../lists/category/categoryForCreation.list";
import {SubCategoryForCreationList} from "../lists/subCategory/subCategoryForCreation.list";
import {CustomCheckbox} from "../inputs/custom.checkbox";
import {itemFilterAction} from "../../store";
import {store} from "../../store/store";
import {Message} from "../messages/message";


export function ItemsFilter() {

    const dispatch: any = useDispatch();

    const {items} = useTypedSelector(state => state.items);
    const {category} = useTypedSelector(state => state.categories);
    const {subCategory} = useTypedSelector(state => state.subCategories);
    const {city} = useTypedSelector(state => state.cities);

    const [title, setTitle] = useState("");
    const [forSale, setForSale] = useState(false);
    const [forBuying, setForBuying] = useState(false);

    const [sale, setSale] = useState(false);
    const [buying, setBuying] = useState(false);

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'title') {
            setTitle(event.target.value);
        }
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
        dispatch(itemFilterAction({
            title: title,
            forSale: forSale,
            category: category.id,
            subCategory: subCategory.id,
            city: city.id,
        })).then(() => {
            if ((forBuying || forSale) && (title || store.getState().subCategories.subCategory.id ||
                store.getState().categories.category.id || store.getState().cities.city.id)) {
                setShowSuccessMessage(true);
                setShowWarningMessage(false);
            } else {
                setShowSuccessMessage(false);
                setShowWarningMessage(true);
            }
        })
    }

    return (
        <>
            {showSuccessMessage ? <Message text={`Поиск произведён`}></Message> : null}
            {showWarningMessage ? <Message text={`Неверно введены данные`}></Message> : null}
            <CityForCreationList></CityForCreationList>
            <CategoryForCreationList></CategoryForCreationList>
            <form onSubmit={submitHandler}>
                <CustomInput
                    type={'text'}
                    placeholder={'Название блока'}
                    name={'title'}
                    value={title}
                    changeHandler={changeHandler}></CustomInput>
                <CustomCheckbox
                    disabled={buying}
                    type={'checkbox'}
                    text={'Для продажи'}
                    checked={!forSale ? !!0 : !!1}
                    name={'forSale'}
                    changeHandler={changeHandler}></CustomCheckbox>
                <CustomCheckbox
                    disabled={sale}
                    type={'checkbox'}
                    text={'Для покупки'}
                    checked={!forBuying ? !!0 : !!1}
                    name={'forBuying'}
                    changeHandler={changeHandler}></CustomCheckbox>
                <AcceptButton
                    buttonText={'Создать'}
                    clickHandler={clickHandler}
                    name={'createAdvertisement'}></AcceptButton>
            </form>


        </>
    )
}