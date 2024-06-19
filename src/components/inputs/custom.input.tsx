import React from "react";
import {InputInterface} from "../../interfaces";

export function CustomInput({placeholder, name, value, changeHandler, styles, type}: InputInterface) {
    return (
        <div>
            <input
                className={styles}
                type={type}
                value={value}
                onChange={changeHandler}
                placeholder={placeholder}
                name={name}
            />
        </div>
    )
}