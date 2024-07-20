import React from "react";

export interface TextAreaInterface {
    disabled?: boolean,
    placeholder?: string,
    name?: string,
    value?: string,
    checked?: boolean,
    text?: string,
    changeHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    styles?: any,
    accept?: string,
}