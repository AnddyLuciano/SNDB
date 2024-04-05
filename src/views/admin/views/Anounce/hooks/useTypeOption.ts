import { useMemo } from "react";
import { OptionsProps } from "../components/input/Options";

export const useTypeOption = () => {
    return useMemo(
        (): Array<OptionsProps> => [
            {
                label: "",
                value: "",
            },
            {
                label: "full-time",
                value: "full-time",
            },
            {
                label: "part-time",
                value: "part-time",
            },
            {
                label: "intern",
                value: "intern",
            },
            {
                label: "alternance",
                value: "alternance",
            },
            {
                label: "freelance",
                value: "freelance",
            },
        ],
        []
    );
};
