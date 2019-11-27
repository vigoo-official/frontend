import { RouteProps, RouteComponentProps } from "react-router"

type AdditionRouteData = {
    title?: string | undefined,
}

export type ViewRouteData = {
    props: RouteProps,
    childrens: ViewRouteData[] | null,
} & AdditionRouteData;

export type RouteType = {
    path: string,
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
} & AdditionRouteData;

export type CreateAppRouting = () => AppRouting

export type Route = {
    path: string,
    title: string | undefined,
}

export type RouterBuilder = {
    for: (...roles: string[]) => RouterBuilder,
    private: () => RouterBuilder,
    children: (routes: RouteType) => void,
};

export type AppRouting = {
    getRoutes: () => Route[],
    addRoute: ((route: ViewRouteData) => void) | ((route: RouteType) => RouterBuilder),
    create: CreateAppRouting,
}