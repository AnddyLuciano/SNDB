import "../css/menuItem.css";

export const MenuItems = (props: MenuItemsProp) => {
    return (
        <div
            className={`menu-section flex items-center justify-start py-2 rounded-md ${
                props.isActive && "menu-active"
            }`}
            onClick={props.onClick}
        >
            <div className="min-w-[55px] text-center text-lg">
                <i className={`${props.icon}`}></i>
            </div>
            {props.onlyIcon && <span className="text-sm font-normal">{props.value}</span>}
        </div>
    );
};

type MenuItemsProp = {
    onlyIcon?: boolean;
    icon?: string;
    value?: string;
    isActive?: boolean;
    children?: MenuItemsProp;
    onClick?: (options?: string | unknown) => void;
};
