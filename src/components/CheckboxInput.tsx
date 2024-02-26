import { ChangeEvent, useState } from "react";
import { useRecoilFormDataState } from "../hooks/useRecoilFormDataState";

export const CheckboxInput = ({ id, label, name }: { id: string; label: string; name: string }) => {
    const [checked, setChecked] = useState<boolean>();

    const { formData, setFormData } = useRecoilFormDataState();

    const handleClick = () => {
        setChecked(!checked);
    };

    const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((v) => ({ ...v, [e.target.name]: e.target.checked || false }));
    };
    return (
        <label htmlFor={id} className="checkbox-container label">
            <div
                className="inline-block relative border-2 border-zinc-400 rounded-md w-6 h-6 hover:cursor-pointer"
                onClick={handleClick}
            >
                {checked && (
                    <i className="fa-solid fa-check absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] font-bold"></i>
                )}
            </div>
            <input type="checkbox" id={id} name={name} onChange={handleFormDataChange} />
            {label}
        </label>
    );
};
