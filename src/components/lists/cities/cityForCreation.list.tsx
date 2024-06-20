import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import React, {useEffect} from "react";
import {getAllCitiesAction, getCityByIdAction} from "../../../store";
//@ts-ignore
import classes from '../../../styles/forms/form.module.css'
import {CustomOption} from "../../selects/custom.option";

export function CityForCreationList() {
    const dispatch: any = useDispatch();
    const {cities, city} = useTypedSelector(state => state.cities);



    useEffect(() => {
       dispatch(getAllCitiesAction());
    }, []);

    const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(getCityByIdAction(+event.target.value))
    }
    //@ts-ignore
    //const selectChangeHandler = (city) => {
    //    dispatch(getCityByIdAction(city.value))


    return (
        <>
            <select onChange={changeHandler} className={classes.select}>
                <option>Выберите город</option>

                {cities.map((city: any): any =>
                    <CustomOption
                        placeholder={city.title}
                        value={city.id}
                        optionText={city.title}></CustomOption>
                )}
            </select>
        </>)
    {/*<div>
            {//@ts-ignore
                <Select
                    options={currentCity}
                    isSearchable={false}
                    onChange={selectChangeHandler}
                    placeholder={'Выберите город'}
                />}
        </div>*/
    }


}