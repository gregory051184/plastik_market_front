import {InputInterface, TextAreaInterface} from "../../interfaces";
import React from "react";

export function TextAreaInput({placeholder, name, value, changeHandler, styles}: TextAreaInterface) {
    return (
        <div>
            <textarea
                className={styles}
                value={value}
                onChange={changeHandler}
                placeholder={placeholder}
                name={name}
            />
        </div>
    )
}