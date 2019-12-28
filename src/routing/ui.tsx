import React from "react";
import { Redirect, Route as ReactRoute, Switch } from "react-router-dom";
import { Redirect as RedirectType, Route, UiRouteProps } from "./types";

export const UiView = (props: UiRouteProps) => {
    const routes = props.routes.filter(e => (e as Route).component) as Route[]
    const redirects = props.routes.filter(e => !(e as Route).component) as RedirectType[]

    return (
        <Switch>
            {routes.map(route => {
                return (
                    <ReactRoute exact={route.exact} key={route.path}
                        path={route.path}
                        render={(props) => {
                            return <route.component {...props} routes={route.children || []} />
                        }}
                    />
                );
            })}
            {redirects.map(redirect => <Redirect {...redirect} />)}
        </Switch>
    )
}
