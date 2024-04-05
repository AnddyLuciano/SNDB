import { useSidebarCollapsed } from "@package/states/GlobalStates";
import React, { useState } from "react";
import "../css/navbar.css";

export const Navbar = () => {
    const { isCollapsed, setIsCollapsed } = useSidebarCollapsed();
    const [searchFocused, setSearchFocused] = useState<boolean>(false);
    const handleCollapseMenu = () => {
        setIsCollapsed(!isCollapsed);
    };
    const handleSearchClick = () => {
        setSearchFocused(true);
    };
    const handleFocus = () => {
        return setSearchFocused(true);
    };
    const handleBlur = () => {
        return setSearchFocused(false);
    };
    return (
        <div
            className={`navbar-container fixed w-full top-0 py-1 px-6 flex justify-between items-center hover:cursor-pointer`}
        >
            <div className="collapsible p-2" onClick={handleCollapseMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="navbar-content-right flex items-center gap-32">
                <div className="message-notification-container flex items-center justify-center gap-10">
                    <div className="message-box hover:cursor-pointer hover:text-primary p-1">
                        <i className="fa-regular fa-message"></i>
                    </div>
                    <div className="notification-box hover:cursor-pointer hover:text-primary p-1">
                        <i className="fa-regular fa-bell"></i>
                    </div>
                    <div className="notification-box hover:cursor-pointer p-1">
                        <label htmlFor="search-id" onClick={handleSearchClick}>
                            <i
                                className={`fa-solid fa-magnifying-glass ${
                                    searchFocused && "text-primary"
                                } hover:text-primary`}
                            ></i>
                        </label>
                        <input
                            type="text"
                            name="search"
                            id="search-id"
                            onBlur={handleBlur}
                            className={`bg-transparent ease-in-out duration-200 focus:outline-none border-b-2  ${
                                searchFocused ? "ml-2 w-[15rem]" : "w-0 "
                            }`}
                        />
                    </div>
                </div>
                <div className="user-profile-container p-1 rounded-md bg-gray-800 text-white hover:cursor-pointer hover:opacity-80 flex items-center justify-center">
                    <span className="material-symbols-outlined">person</span>
                </div>
            </div>
        </div>
    );
};
