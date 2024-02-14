import { useState } from "react";
import "../css/input.css";

export const TextInput = ({
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
                    placeholder={placeholder ?? "enter input here"}
                    className="w-full"
                />
            </div>
        </main>
    );
};
