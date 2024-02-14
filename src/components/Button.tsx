import { ComponentPropsWithoutRef } from "react";

export const Button = (props: ButtonProps) => {
    return (
        <div
            style={{ backgroundColor: props.color }}
            onClick={props.onClick}
            className={`p-2 rounded-md text-[#ebf2f7] text-center font-semibold duration-150 hover:cursor-pointer ${props.className}`}
        >
            {props.label}
        </div>
    );
};
type ButtonProps = ComponentPropsWithoutRef<"div"> & {
    label: string;
    color?: string;
    hoverColor?: string;
};
