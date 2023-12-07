export const MenuItems = (props: MenuItemsProp) => {
    return (
        <div className="menu-title-section flex items-center">
            <i className={`${props.icon}`}></i>
            {props.onlyIcon && (
                <span className="font-semibold text-lg">{props.value}</span>
            )}
        </div>
    );
};

type MenuItemsProp = {
    onlyIcon?: boolean;
    icon?: string;
    value?: string;
    children: MenuItemsProp;
};
