import { ChangeEvent, useEffect, useState } from "react";
import "../css/input.css";
import { useRecoilFormDataState } from "../hooks/useRecoilFormDataState";
import { Tooltip } from "react-tooltip";
import { emailValidation, useValidateInput } from "../hooks/useValidateInput";
import _ from "lodash";

export const TextInput = ({
    icon,
    id,
    placeholder,
    label,
    name,
    validateInput,
}: TextInputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>();
    const [tooltipMessage, setTooltipMessage] = useState<string>();
    const [value, setValue] = useState<string>();

    const { formData, setFormData } = useRecoilFormDataState();

    const handleFocus = () => {
        return setIsFocused(true);
    };

    const handleBlur = () => {
        return setIsFocused(false);
    };

    const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((v) => ({ ...v, [e.target.name]: e.target.value }));
        setValue(e.target.value);
    };

    useEffect(() => {
        if (!isFocused) {
            if (value) {
                if (validateInput === "email") {
                    const { hasError, message } = emailValidation({ value: value });
                    if (hasError) {
                        setTooltipMessage(message);
                    } else {
                        setTooltipMessage(undefined);
                    }
                }
            } else {
                setTooltipMessage(undefined);
            }
        }
    }, [isFocused, tooltipMessage]);
    return (
        <main className="input-text-box">
            <label htmlFor={id} className="label">
                {label}
            </label>
            <div
                className={`input-text ${isFocused ? "focus" : ""}`}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                <i className={icon}></i>
                <input
                    type="text"
                    id={id}
                    data-tooltip-id={id}
                    name={name}
                    placeholder={placeholder ?? "enter input here"}
                    className="w-full"
                    onChange={handleFormDataChange}
                    required
                    title=""
                />
                <Tooltip
                    id={id}
                    content={tooltipMessage}
                    place="top"
                    offset={20}
                    isOpen={!_.isEmpty(tooltipMessage) && !isFocused}
                />
            </div>
        </main>
    );
};

export type ValidateInputProps = {
    validateInput?: "email" | "password";
};

type TextInputProps = ValidateInputProps & {
    id: string;
    placeholder?: string;
    icon?: string;
    label: string;
    name: string;
};
