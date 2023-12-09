import { atom } from "recoil";
import "./App.css";
import { Layout } from "./container/Layout";
import { AppRouteProps, AppRoutes } from "./AppRoutes";
import * as React from "react";
function App() {
    return <AppRoutes routes={Routes} />;
}

export default App;

const Home = React.lazy(() => import("./views/Home/Container/Home"));
const Anounce = React.lazy(() => import("./views/Anounce/Container/Anounce"));
const Dashboard = React.lazy(
    () => import("./views/Dashboard/Container/Dashboard")
);

const Routes: Array<AppRouteProps> = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "announce",
                element: <Anounce />,
            },
        ],
    },
];

export const sidebarCollapseState = atom({
    key: "sidebarCollapseState",
    default: true,
});
