import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { GeneralSuspense } from "../../../components/GeneralSuspense";

export const Layout = () => {
    return (
        <main className="layout-container flex">
            <Sidebar />
            <div className="flex-1 bg-gray-900">
                <GeneralSuspense>
                    <Outlet />
                </GeneralSuspense>
            </div>
        </main>
    );
};
