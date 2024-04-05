import React, { useCallback } from "react";
import { ControlFormFields, useControlFormFields } from "./hooks/useControlFormFields";
import { BaseControlProps } from "./BaseControl";
import { FieldValues, UseFormRegister, UseFormResetField } from "react-hook-form";

export const ControlListForm = ({ register, resetField, ...props }: ControlListFormProps) => {
    const fields = useControlFormFields(props.fields);
    const getField = useCallback(
        (type: string) => {
            return fields[type];
        },
        [fields]
    );

    return (
        <>
            {props.forms
                .filter((item) => item !== undefined)
                .map((item) => {
                    const field = getField(item.type || "text");
                    if (!field) {
                        return <span>{`field ${field} is not supported`}</span>;
                    }
                    const element = React.createElement(field, {
                        ...item,
                        className: item.className || "",
                        name: item.name || "",
                        key: `control-${item.name}`,
                        isDark: item.isDark,
                        placeholder: item.placeholder || "",
                        register,
                        resetField,
                    });
                    return element;
                })}
        </>
    );
};

export type ControlListFormProps = {
    fields?: ControlFormFields;
    forms: ControlListFormItem[];
    onChange?: (name: string, value: any) => void;
    register?: UseFormRegister<FieldValues>;
    resetField?: UseFormResetField<FieldValues>;
};

export type ControlListFormItem = BaseControlProps & {
    type: string;
    value?: any;
    [key: string]: any;
};
