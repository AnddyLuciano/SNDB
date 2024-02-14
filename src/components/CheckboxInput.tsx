import { useState } from "react";

export const CheckboxInput = ({ id, label }: { id: string; label: string }) => {
    const [checked, setChecked] = useState<boolean>();
    const handleClick = () => {
        setChecked(!checked);
    };
    return (
        <label htmlFor={id} className="checkbox-container label">
            <div
                className="inline-block relative border-2 border-zinc-400 rounded-md w-6 h-6"
                onClick={handleClick}
            >
                {checked && (
                    <i className="fa-solid fa-check absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] font-bold"></i>
                )}
            </div>
            <input type="checkbox" id={id} />
            {label}
        </label>
    );
};
