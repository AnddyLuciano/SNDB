import { Sidebar } from "./Sidebar";

export const Layout = () => {
    return (
        <main className="layout-container flex">
            <Sidebar />
            <div className="flex-1 bg-gray-900"></div>
        </main>
    );
};
