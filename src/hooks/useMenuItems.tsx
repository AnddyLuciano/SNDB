import { useMemo } from "react";
import { MenuItemsProp } from "../components/MenuItem";
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
                children: [
                    {
                        ke: "child1",
                        value: "Child 1",
                        link: "child1",
                    },
                    {
                        ke: "child2",
                        value: "Child 2",
                        link: "child2",
                    },
                    {
                        ke: "child3",
                        value: "Child 3",
                        link: "child3",
                    },
                ] as Array<MenuItemsProp>,
            },
            {
                ke: "appointment",
                title: "Rendez-vous",
                icon: "fa-solid fa-calendar-check",
                link: "appointment",
                children: [
                    {
                        ke: "child1",
                        value: "Child 1",
                        link: "child1",
                    },
                    {
                        ke: "child2",
                        value: "Child 2",
                        link: "child2",
                    },
                ] as Array<MenuItemsProp>,
            },
        ],
        []
    );
};
