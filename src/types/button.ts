import { ReactNode } from "react";

export type ButtonProps = {
    children: ReactNode;
    _class?: string;
    onClick: () => any 
}
