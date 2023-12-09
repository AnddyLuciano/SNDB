import { useNavigate } from "react-router-dom";

export function Title({ isCollapsed }: { isCollapsed?: boolean }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate({ pathname: "" });
    };
    return (
        <div
            className="menu-title-section flex items-center mb-12 cursor-pointer"
            onClick={handleClick}
        >
            <img
                src="./Logo Sa.svg"
                alt="logo-sariaka"
                width={55}
                className="inline-block"
            />
            {isCollapsed && (
                <span className="font-bold text-xl">Sariakaniaina</span>
            )}
        </div>
    );
}
