import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTyped.selector";
import React from "react";

export function ItemsList() {
    const dispatch: any = useDispatch();
    const {items} = useTypedSelector(state => state.items);


    return (
        <>
            {items.map((item: any) => {
               <div>
                   <img/>
               </div>
            })}
        </>
    )
}