import { ComponentPropsWithoutRef } from "react";

export const Button = (props: ButtonProps) => {
    return (
        <div
            onClick={props.onClick}
            className={`p-2 rounded-md border-2 text-[#ebf2f7] text-center font-semibold bg-[#00000010] hover:bg-[#00000021] hover:cursor-pointer ${props.className}`}
        >
            {props.label}
        </div>
    );
};
type ButtonProps = ComponentPropsWithoutRef<"div"> & {
    label: string;
};
