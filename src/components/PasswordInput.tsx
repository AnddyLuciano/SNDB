import { ChangeEvent, useEffect, useRef, useState } from "react";
import "../css/input.css";
import { useRecoilFormDataState } from "../hooks/useRecoilFormDataState";
import { ValidateInputProps } from "./TextInput";
import { emailValidation } from "../hooks/useValidateInput";

export const PasswordInput = ({
    icon,
    id,
    placeholder,
    label,
    name,
    validateInput,
}: PasswordInputProps) => {
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
    };

    // useEffect(() => {
    //     if (!isFocused) {
    //         if (value) {
    //             if (validateInput === "password") {
    //                 const { hasError, message } = emailValidation({ value: value });
    //                 if (hasError) {
    //                     setTooltipMessage(message);
    //                 } else {
    //                     setTooltipMessage(undefined);
    //                 }
    //             }
    //         } else {
    //             setTooltipMessage(undefined);
    //         }
    //     }
    // }, [isFocused, tooltipMessage]);
    return (
        <main className="input-password-box">
            <label htmlFor={id} className="label">
                {label}
            </label>
            <div
                className={`input-password ${isFocused ? "focus" : ""}`}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                <i className={icon}></i>
                <input
                    type="password"
                    id={id}
                    name={name}
                    placeholder={placeholder ?? "enter password here"}
                    className="w-full"
                    onChange={handleFormDataChange}
                />
            </div>
        </main>
    );
};

type PasswordInputProps = ValidateInputProps & {
    id: string;
    placeholder?: string;
    icon?: string;
    label: string;
    name: string;
};
