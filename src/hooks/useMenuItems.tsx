import { useMemo } from "react";
export const useMenuItems = () => {
    return useMemo(
        () => [
            {
                title: "Dashboard",
                icon: "fa-solid fa-house",
                link: "dashboard",
            },
            {
                title: "Annonce",
                icon: "fa-solid fa-bullhorn",
                link: "announce",
            },
            {
                title: "Rendez-vous",
                icon: "fa-solid fa-calendar-check",
            },
        ],
        []
    );
};
