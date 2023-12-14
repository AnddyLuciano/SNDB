import { Collapsible } from "../components/Collapsible";
import { Title } from "../components/Title";
import { useRecoilState } from "recoil";
import { sidebarCollapseState } from "../App";
import { useMenuItems } from "../hooks/useMenuItems";
import { MenuItems } from "../components/MenuItem";
import { useNavigate } from "react-router-dom";

import "../css/sidebar.css";

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useRecoilState(sidebarCollapseState);
    const [, path] = location.pathname.split("/");
    const sidebarWidth = 350;
    const menuItems = useMenuItems();
    const navigate = useNavigate();

    const handleCollapseMenu = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            className={`sidebar relative bg-slate-950 text-white py-6 h-[100dvh] duration-150 ease-[cubic-bezier(0.18,0.89,0.32,1.27)] ${
                isCollapsed ? `min-w-[${sidebarWidth}px] px-4` : "px-2"
            }`}
        >
            <Title isCollapsed={isCollapsed} />
            <Collapsible handleCollapseMenu={handleCollapseMenu} isCollapsed={isCollapsed} />
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
                        />
                    );
                })}
            </div>
        </div>
    );
};
