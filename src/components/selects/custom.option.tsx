import {OptionInterface} from "../../interfaces";

export function CustomOption({value, optionText, styles, placeholder}: OptionInterface) {
    return (
        <option
            className={styles}
            //@ts-ignore
            placeholder={placeholder}
            value={value}>
            {optionText}
        </option>
    )
}