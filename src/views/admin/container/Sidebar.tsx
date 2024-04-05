import { Collapsible } from "../../../components/Collapsible";
import { Title } from "../../../components/Title";
import { useRecoilState } from "recoil";
import { sidebarCollapseState } from "../../../App";
import { useMenuItems } from "../../../hooks/useMenuItems";
import { MenuItems } from "../../../components/MenuItem";
import { useNavigate } from "react-router-dom";

import "../../../css/sidebar.css";
import { useEffect } from "react";
import { useTheme } from "@package/states/GlobalStates";

export const Sidebar = () => {
    const [isCollapsed] = useRecoilState(sidebarCollapseState);
    const { isDark } = useTheme();
    const [, path] = location.pathname.split("/");
    const menuItems = useMenuItems();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            window.dispatchEvent(new Event("resize"));
        }, 100);
        console.log(isCollapsed);
    }, [isCollapsed]);

    return (
        <div
            className={`sidebar fixed top-0 left-0 ${
                isDark ? "bg-slate-950 text-white" : "bg-white"
            }  py-6 h-[100dvh] duration-150 ease-[cubic-bezier(0.18,0.89,0.32,1.27)] ${
                isCollapsed && "min-w-[13rem]"
            }`}
        >
            <Title isCollapsed={isCollapsed} />
            {/* <Collapsible handleCollapseMenu={handleCollapseMenu} isCollapsed={isCollapsed} /> */}
            <div className="flex flex-col gap-3">
                {menuItems.map((menuItem, index) => {
                    return (
                        <MenuItems
                            key={`menu-items-${index}`}
                            icon={menuItem.icon}
                            value={menuItem.title}
                            onlyIcon={isCollapsed}
                            isActive={menuItem.ke === path}
                            onClick={() => {
                                navigate({ pathname: menuItem.link });
                            }}
                            children={menuItem.children}
                        />
                    );
                })}
            </div>
        </div>
    );
};
