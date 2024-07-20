import {InputInterface} from "../../interfaces";
//@ts-ignore
import classes from '../../styles/forms/form.module.css'

export function CustomCheckbox({checked, name, changeHandler, text, disabled, styles, type}: InputInterface) {
    return (
        <div>
            <input
                className={styles}
                disabled={disabled}
                type={type}
                checked={checked}
                name={name}
                onChange={changeHandler}/><span className={classes.p}>{text}</span>
        </div>

    )
}