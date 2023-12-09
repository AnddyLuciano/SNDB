export const MenuItems = (props: MenuItemsProp) => {
    return (
        <div
            className="menu-title-section flex items-center justify-start py-2 rounded-md hover:bg-slate-800 hover:cursor-pointer"
            onClick={props.onClick}
        >
            <div className="min-w-[55px] text-center text-lg">
                <i className={`${props.icon}`}></i>
            </div>
            {props.onlyIcon && (
                <span className="text-sm font-normal">{props.value}</span>
            )}
        </div>
    );
};

type MenuItemsProp = {
    onlyIcon?: boolean;
    icon?: string;
    value?: string;
    children?: MenuItemsProp;
    onClick?: (options?: string | unknown) => void;
};
