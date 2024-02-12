import { useNavigate } from "react-router-dom";
import "../css/menuItem.css";

export const MenuItems = (props: MenuItemsProp) => {
    const navigate = useNavigate();
    return (
        <main className="relative menu px-2">
            <div
                className={`menu-section flex items-center justify-start py-2 rounded-md ${
                    props.isActive && "menu-active"
                } ${props.children ? "hover:opacity-100 " : ""}`}
                onClick={props.onClick}
            >
                <div className="min-w-[55px] text-center text-lg">
                    <i className={`${props.icon}`}></i>
                </div>
                {props.onlyIcon && <span className="text-sm font-normal">{props.value}</span>}
            </div>
            {props.children && (
                <div className="sub opacity-0 hidden">
                    <div
                        className={`sub-menu-box flex flex-col gap-3 rounded-r-md border-l-4 border-[#fff]`}
                    >
                        {props.children.map((items) => (
                            <div
                                className="sub-menu-item hover:bg-[#ffffff31] rounded-r-md px-3 py-1"
                                onClick={() => {
                                    navigate({ pathname: items.link ?? "#" });
                                }}
                            >
                                <span className="text-xs">{items.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
};

export type MenuItemsProp = {
    onlyIcon?: boolean;
    ke?: string;
    icon?: string;
    value?: string;
    isActive?: boolean;
    children?: Array<MenuItemsProp>;
    onClick?: (options?: string | unknown) => void;
    link?: string;
};
