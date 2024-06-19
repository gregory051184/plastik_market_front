import React from "react";
import {ButtonInterface} from "../../interfaces";

export function WarningButton({clickHandler, buttonText, styles}: ButtonInterface) {
    return (
        <button
            className={styles}
            type="submit"
            onClick={clickHandler}>
            {buttonText}
        </button>

    )
}