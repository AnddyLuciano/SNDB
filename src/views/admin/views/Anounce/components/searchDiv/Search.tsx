import React from "react";

import { ControlList } from "@package/components/control/ControlList";
import { useSearchFormItem } from "../../hooks/useSearchFormItems";
import { useForm } from "react-hook-form";
import { Select } from "../input/Select";
import Options from "../input/Options";
import { ResetAllInput } from "../input/ResetAllInput";
import { useSortByOption } from "../../hooks/useSortByOption";
import { useTypeOption } from "../../hooks/useTypeOption";
import { useLevelOption } from "../../hooks/useLevelOption";
import { useTheme } from "@package/states/GlobalStates";

const Search = () => {
    const { isDark } = useTheme();
    const { reset } = useForm();
    const control = useSearchFormItem();
    const sortByOption = useSortByOption();
    const typeOption = useTypeOption();
    const levelOption = useLevelOption();

    return (
        <div
            className={`search-box grid gap-10 ${
                isDark ? "bg-gray-800" : "bg-secondary"
            } rounded-md p-12`}
        >
            <ControlList {...control} />
            <div className="filter-box flex items-center justify-center gap-10">
                <Select isDark={isDark} label="Sort by">
                    <Options options={sortByOption} />
                </Select>
                <Select isDark={isDark} label="Level">
                    <Options options={levelOption} />
                </Select>
                <Select isDark={isDark} label="Type">
                    <Options options={typeOption} />
                </Select>
                <ResetAllInput isDark={isDark} reset={reset} />
            </div>
        </div>
    );
};

export default Search;
