export interface ButtonInterface {
    buttonText: string,
    clickHandler: () => void,
    name: string,
    styles?: any,
    disabled?: boolean
}