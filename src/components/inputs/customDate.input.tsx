import React from "react";
import {InputInterface} from "../../interfaces";

export function CustomDateInput({placeholder, name, value, changeHandler, styles, type}: InputInterface) {
    return (
        <div>
            <input
                className={styles}
                //type="date"
                type={type}
                value={value}
                onChange={changeHandler}
                placeholder={placeholder}
                name={name}
            />
        </div>
    )
}