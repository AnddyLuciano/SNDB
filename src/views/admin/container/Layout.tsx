import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { GeneralSuspense } from "../../../components/GeneralSuspense";
import { Navbar } from "./Navbar";
import { useSidebarCollapsed } from "@package/states/GlobalStates";

export const Layout = () => {
    const { isCollapsed } = useSidebarCollapsed();
    return (
        <main className="layout-container flex">
            <Sidebar />
            <div className={`flex-1 ${isCollapsed ? "ml-[13rem]" : "ml-[4rem]"}`}>
                <Navbar />
                <div className="children mt-10">
                    <GeneralSuspense>
                        <Outlet />
                    </GeneralSuspense>
                </div>
            </div>
        </main>
    );
};
