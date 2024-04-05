import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { MainLoading } from "./components/MainLoading.tsx";
import { Theme } from "./components/theme/container/Theme.tsx";

const App = React.lazy(() => import("./App.tsx"));
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                <Suspense fallback={<MainLoading />}>
                    <App />
                    <Theme />
                </Suspense>
            </BrowserRouter>
        </RecoilRoot>
    </React.StrictMode>
);
