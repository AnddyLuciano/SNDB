import React from "react";
import { ControlListForm, ControlListFormProps } from "./ControlListForm";
import { FieldValues, useForm } from "react-hook-form";
import { ControlListFooter, ControlListFooterProps } from "./ControlListFooter";
import { useTheme } from "@package/states/GlobalStates";

export const ControlList = (props: ControlListProps) => {
    const { isDark } = useTheme();
    console.log(isDark);
    const { handleSubmit, register, resetField } = useForm();
    return (
        <form
            className="control-list-container"
            onSubmit={props.onSubmit && handleSubmit(props.onSubmit)}
        >
            <div
                className={`grid-one flex items-center justify-between flex-wrap ${
                    isDark ? "bg-gray-700" : "bg-white"
                } shadow-sm py-3 px-5 rounded-md`}
            >
                <ControlListForm {...props.data} register={register} resetField={resetField} />
                <ControlListFooter {...props.data} />
            </div>
        </form>
    );
};

export type ControlListProps = {
    onSubmit?: (value: FieldValues) => void;
    data: ControlListDataProps;
};

export type ControlListDataProps = ControlListFormProps & ControlListFooterProps;
