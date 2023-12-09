export function Collapsible({
    handleCollapseMenu,
    isCollapsed,
}: {
    isCollapsed?: boolean;
    handleCollapseMenu: () => void;
}) {
    return (
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
    );
}
