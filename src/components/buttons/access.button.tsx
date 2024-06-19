import React from "react";
import {ButtonInterface} from "../../interfaces";

export function AcceptButton({clickHandler, buttonText, styles, disabled}: ButtonInterface) {
    return (
        <button
            disabled={disabled}
            className={styles}
            type="submit"
            onClick={clickHandler}>
            {buttonText}
        </button>

    )
}