import * as H from 'history';
import { RouteComponentProps } from "react-router";

export type Route = {
    path: string,
    component: React.ComponentType<RouteComponentProps<any> & UiRouteProps>,
    children?: Route[],
    exact?: boolean,
    access?: string[],
}

export type Redirect = {
    to: H.LocationDescriptor,
    push?: boolean,
    from?: string,
    path?: string,
    exact?: boolean,
    strict?: boolean,
}

export type RouteConfig = Route | Redirect

export type UiRouteProps = {
    routes: RouteConfig[],
}