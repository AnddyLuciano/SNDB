import { atom } from "recoil";
import "./App.css";
import { Layout } from "./container/Layout";

function App() {
    return <Layout />;
}

export default App;

export const sidebarCollapseState = atom({
    key: "sidebarCollapseState",
    default: true,
});
