import { useRecoilState } from "recoil";
import { sidebarCollapseState } from "../App";

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useRecoilState(sidebarCollapseState);
    const sidebarWidth = 350;

    const handleCollapseMenu = () => {
        setIsCollapsed(!isCollapsed);
    };
    return (
        <div
            className={`sidebar relative bg-slate-950 text-white py-2 h-[100dvh] ${
                isCollapsed ? `w-[${sidebarWidth}px] px-4` : "px-0"
            }`}
        >
            <div className="menu-title-section flex items-center">
                <img
                    src="../public/Logo Sa.svg"
                    alt="logo-sariaka"
                    width={55}
                    className="inline-block"
                />
                {isCollapsed && (
                    <span className="font-bold text-xl">Sariakaniaina</span>
                )}
            </div>
            <aside
                className="absolute top-2 -right-3 bg-slate-400 px-2 rounded-full"
                onClick={handleCollapseMenu}
            >
                {isCollapsed ? (
                    <i className="fa-solid fa-angle-left text-xs"></i>
                ) : (
                    <i className="fa-solid fa-angle-right text-xs"></i>
                )}
            </aside>
        </div>
    );
};
