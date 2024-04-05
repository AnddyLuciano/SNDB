import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import { sidebarCollapseState } from "../../src/App";

const getTheme = () => {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "false");
    }
    const isDark = JSON.parse(localStorage.getItem("theme")!) as boolean;
    return isDark;
};

export const themeState = atom({
    key: "themeState",
    default: getTheme(),
});

export const jobFilterState = atom({
    key: "jobFilterState",
    default: {
        inputJobSearch: "",
        inputCompanySearch: "",
        inputLocationSearch: "",
    },
});

export const useTheme = () => {
    const [isDark, setTheme] = useRecoilState(themeState);

    const setIsDark = useCallback(
        (isDark: boolean) =>
            setTheme(() => {
                localStorage.setItem("theme", isDark.toString());
                return getTheme();
            }),
        [setTheme]
    );

    return {
        isDark,
        setIsDark,
    };
};

export const useSidebarCollapsed = () => {
    const [isCollapsed, setIsCollapsed] = useRecoilState(sidebarCollapseState);

    return {
        isCollapsed,
        setIsCollapsed,
    };
};
