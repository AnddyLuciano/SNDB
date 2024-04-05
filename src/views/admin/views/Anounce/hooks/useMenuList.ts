import { useMemo } from "react";

export const useMenuList = () => {
    return useMemo(
        () => [
            {
                key: "jobs",
                item: "Jobs",
            },
            {
                key: "companies",
                item: "Companies",
            },
            {
                key: "about",
                item: "About",
            },
            {
                key: "contact",
                item: "Contact",
            },
            {
                key: "blog",
                item: "Blog",
            },
        ],
        []
    );
};
