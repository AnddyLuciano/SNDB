import React from "react";
import { FieldValues, UseFormReset } from "react-hook-form";

export const ResetAllInput = ({ isDark, reset }: ResetAllInputProps) => {
    return (
        <p
            className={`hover:cursor-pointer hover:opacity-80 ${
                isDark ? "bg-gray-900 border border-white text-white" : "bg-white text-body"
            } shadow-sm py-1 px-3 rounded-full`}
            onClick={() => reset()}
        >
            Clear all
        </p>
    );
};

export type ResetAllInputProps = {
    isDark: boolean;
    reset: UseFormReset<FieldValues>;
};
