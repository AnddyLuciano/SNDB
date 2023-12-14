import { useMemo } from "react";
export const useMenuItems = () => {
    return useMemo(
        () => [
            {
                ke: "dashboard",
                title: "Dashboard",
                icon: "fa-solid fa-house",
                link: "dashboard",
            },
            {
                ke: "announce",
                title: "Annonce",
                icon: "fa-solid fa-bullhorn",
                link: "announce",
            },
            {
                ke: "appointment",
                title: "Rendez-vous",
                icon: "fa-solid fa-calendar-check",
                link: "appointment",
            },
        ],
        []
    );
};
