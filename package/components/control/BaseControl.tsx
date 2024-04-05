// import { useThemeStore } from "../../states/GlobalZustandStates";
import React, { PropsWithChildren } from "react";
import {
    FieldValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormReset,
    UseFormResetField,
} from "react-hook-form";

export const BaseControl = ({ children }: BaseControlProps) => {
    // const { isDark } = useThemeStore();
    return <div className="base-control">{children}</div>;
};

export type BaseControlProps = PropsWithChildren & {
    label?: string;
    placeholder?: string;
    name?: string;
    // isDark: boolean;
    className?: string;
    register?: UseFormRegister<FieldValues>;
    resetField?: UseFormResetField<FieldValues>;
    reset?: UseFormReset<FieldValues>;
    handleSubmit?: UseFormHandleSubmit<FieldValues>;
};
