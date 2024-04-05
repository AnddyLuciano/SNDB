import { useMemo } from "react";
import { OptionsProps } from "../components/input/Options";

export const useLevelOption = () => {
    return useMemo(
        (): Array<OptionsProps> => [
            {
                label: "",
                value: "",
            },
            {
                label: "senior",
                value: "full-time",
            },
            {
                label: "medior",
                value: "medior",
            },
            {
                label: "junior",
                value: "medior",
            },
        ],
        []
    );
};
