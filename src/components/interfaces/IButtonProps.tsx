import type { ReactElement } from "react"

export interface IButtonProps {
    style?: {textDecoration: string};
    bgColor: 'skyblue'|'tomato';
    children:string|ReactElement|Array<ReactElement|string>
}
