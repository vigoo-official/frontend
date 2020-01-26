import NotFoundPage from "./frameworks/site/pages/notfound";
import SignInPage from "./frameworks/site/pages/signin";
import SignUpPage from "./frameworks/site/pages/signup";
import { RouteConfig } from "./frameworks/site/routing";

export const getHomeRoute = () => '/';
export const getSignUpRoute = () => '/signup';
export const getNotFoundRoute = () => '/not-found';

const notFoundPath = getNotFoundRoute();

const appRoutes: RouteConfig[] = [
    {
        path: getSignUpRoute(),
        component: SignUpPage,
        exact: true,
    },
    {
        path: getHomeRoute(),
        component: SignInPage,
        exact: true,
    },
    {
        path: getNotFoundRoute(),
        component: NotFoundPage,
    },
    {
        to: notFoundPath,
    }
]

export default appRoutes;