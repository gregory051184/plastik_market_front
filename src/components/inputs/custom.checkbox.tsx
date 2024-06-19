import {InputInterface} from "../../interfaces";

export function CustomCheckbox({checked, name, changeHandler, text, disabled, styles, type}: InputInterface) {
    return (
        <div>
            <input
                className={styles}
                disabled={disabled}
                type={type}
                checked={checked}
                name={name}
                onChange={changeHandler}/>{text}
        </div>

    )
}