import { ComponentPropsWithoutRef } from "react";

export const Button = (props: ButtonProps) => {
    return (
        <div
            style={{ backgroundColor: props.color }}
            onClick={props.onClick}
            className={`relative p-2 rounded-md text-[#ebf2f7] text-center font-semibold duration-150 hover:cursor-pointer ${
                props.className
            } hover:opacity-80 ${props.isLoading && "opacity-80"}`}
        >
            <p>{props.label}</p>
            {props.isLoading && (
                <div className="absolute top-1/2 translate-y-[-50%] right-2">
                    <i className="fas fa-cog fa-spin"></i>
                </div>
            )}
        </div>
    );
};
type ButtonProps = ComponentPropsWithoutRef<"div"> & {
    label: string;
    color?: string;
    isLoading?: boolean;
};
