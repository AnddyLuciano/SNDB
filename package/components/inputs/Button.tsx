import React from "react";

export const Button = ({ type, value, className, onClick }: ButtonProps) => {
    return (
        <input
            type={type || "button"}
            className={`py-3 px-5 rounded-md bg-primary text-white hover:opacity-90 ${className}`}
            value={value || "Search"}
            onClick={onClick}
        />
    );
};

export type ButtonProps = {
    type?: string;
    value?: string;
    className?: string;
    onClick?: () => void;
};
