import { RouteComponentProps } from "react-router";

type Route = {
    name: string,
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
}