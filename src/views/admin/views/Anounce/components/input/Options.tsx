import React from "react";

const Options = ({ options }: { options: Array<OptionsProps> }) => {
    return (
        <>
            {options.map((option) => (
                <option key={option.label} label={option.label}>
                    {option.label}
                </option>
            ))}
        </>
    );
};

export default Options;

export type OptionsProps = {
    label: string;
    value: string;
};
