import { atom } from "recoil";
import "./App.css";
import { Layout } from "./views/admin/container/Layout";
import { AppRouteProps, AppRoutes } from "./AppRoutes";
import * as React from "react";
import { Outlet } from "react-router-dom";

function App() {
    return <AppRoutes routes={Routes} />;
}

export default App;

const Home = React.lazy(() => import("./views/admin/views/Home/Container/Home"));
const Anounce = React.lazy(() => import("./views/admin/views/Anounce/Container/Anounce"));
const Dashboard = React.lazy(() => import("./views/admin/views/Dashboard/Container/Dashboard"));
const Login = React.lazy(() => import("./views/auth/views/login/container/Login"));
const Signup = React.lazy(() => import("./views/auth/views/signup/container/Signup"));

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
    {
        path: "auth",
        element: <Outlet />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
        ],
    },
];

export const sidebarCollapseState = atom({
    key: "sidebarCollapseState",
    default: true,
});
