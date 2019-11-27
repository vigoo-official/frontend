import { RouteType, AppRouting, CreateAppRouting, RouterBuilder, ViewRouteData } from "./types"

const createAppRouting: CreateAppRouting = function (): AppRouting {
    const routes: ViewRouteData[] = []

    const createRoute = function (route: RouteType) {
        return {
            props: {
                path: route.path,
                component: route.component,
            },
            title: route.title,
            childrens: null,
        }
    }

    return {
        getRoutes: function () {
            return routes.map(route => ({
                path: route.props.path as string,
                title: route.title,
            }))
        },
        addRoute: function (route: RouteType): RouterBuilder {
            const viewRoute: ViewRouteData = createRoute(route);
            routes.push(viewRoute)

            const builder: RouterBuilder = {
                for: function (...roles: string[]) {
                    return builder
                },
                private: function () {
                    return builder
                },
                children: function (route: RouteType) {
                    viewRoute.childrens = viewRoute.childrens || [];
                    viewRoute.childrens.push();

                },
            }

            return builder
        },
        create: createAppRouting,
    }
}

const appRouting = createAppRouting()
export default appRouting