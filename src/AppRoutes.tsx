import { RouteObject, useRoutes } from "react-router-dom";

export const AppRoutes = ({
    routes,
}: {
    routes: Array<AppRouteProps>;
}): React.ReactElement | null => useRoutes(routes);

export type AppRouteProps = Omit<RouteObject, "children" | "index"> & {
    children?: Array<AppRouteProps>;
    private?: boolean;
};
