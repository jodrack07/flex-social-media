import { ReactNode } from "react";

export type ButtonProps = {
    _type?: "button" | "submit" | "reset" | undefined
    children: ReactNode;
    _class?: string;
    onClick: (e?: any) => void
}
