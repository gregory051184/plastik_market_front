import React from "react";

export interface InputInterface {
        disabled?: boolean,
        placeholder?: string,
        type: string
        name?: string,
        value?: string,
        checked?: boolean,
        text?: string,
        changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
        styles?: any,
        accept?: string,
}