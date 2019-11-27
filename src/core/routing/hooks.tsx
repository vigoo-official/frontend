import React from "react"
import { useRouteMatch } from "react-router";
import { AppRouting } from "./types";

export const useUiView = function (appRouter: AppRouting) {
    const match = useRouteMatch<any>();
    const routes = appRouter.getRoutes();
    return ;
}