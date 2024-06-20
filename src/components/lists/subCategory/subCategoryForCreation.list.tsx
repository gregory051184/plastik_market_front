import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import React from "react";
import {
    getSubCategoryByIdAction
} from "../../../store";
import {CustomOption} from "../../selects/custom.option";
// @ts-ignore
import classes from '../../../styles/forms/form.module.css'


interface SubCat {
    subCategories: any[]
}

export function SubCategoryForCreationList({subCategories}: SubCat) {
    const dispatch: any = useDispatch();
    //const {subCategories} = useTypedSelector(state => state.subCategories);
    const {category} = useTypedSelector(state => state.categories);

    //const [checked, setChecked] = React.useState(false);

    //useEffect(() => {

    //dispatch(getAllSubCategoriesAction());

    //}, []);


    const subCategoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(getSubCategoryByIdAction(+event.target.value))
    }

    //@ts-ignore
    //const selectChangeHandler = (subCategory) => {
    //    dispatch(getSubCategoryByIdAction(subCategory.value))
    //}


    return (
        <>
            {/*<div>
                {//@ts-ignore
                    <Select
                        options={subCategories}
                        isSearchable={false}
                        onChange={selectChangeHandler}
                        placeholder={'Выберите подкатегорию'}
                    />}
            </div>*/}
            <select onChange={subCategoryChangeHandler} className={classes.select}>
                <option>Выберите подкатегорию</option>
                {
                    subCategories
                        .map((subCategory: any) =>
                            <CustomOption
                                placeholder={subCategory.title}
                                value={subCategory.id}
                                optionText={subCategory.title}></CustomOption>)
                }
            </select>

        </>
    )
}