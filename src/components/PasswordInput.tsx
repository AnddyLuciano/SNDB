import { useEffect, useRef, useState } from "react";
import "../css/input.css";

export const PasswordInput = ({
    icon,
    id,
    placeholder,
    label,
}: {
    id: string;
    placeholder?: string;
    icon?: string;
    label: string;
}) => {
    const [isFocused, setIsFocused] = useState<boolean>();

    const handleFocus = () => {
        return setIsFocused(true);
    };
    const handleBlur = () => {
        return setIsFocused(false);
    };

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
                    placeholder={placeholder ?? "enter password here"}
                    className="w-full"
                />
            </div>
        </main>
    );
};
