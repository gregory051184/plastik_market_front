import {MessageInterface} from "../../interfaces";
// @ts-ignore
import classes from '../../styles/forms/form.module.css'
export function Message({text}: MessageInterface) {
    return (
        <h3 className={classes.title}>{text}</h3>
    )
}