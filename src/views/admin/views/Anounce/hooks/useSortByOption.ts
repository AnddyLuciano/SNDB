import { useMemo } from "react";
import { OptionsProps } from "../components/input/Options";

export const useSortByOption = () => {
    return useMemo(
        (): Array<OptionsProps> => [
            {
                label: "",
                value: "",
            },
            {
                label: "ASC",
                value: "ASC",
            },
            {
                label: "DSC",
                value: "DSC",
            },
        ],
        []
    );
};
