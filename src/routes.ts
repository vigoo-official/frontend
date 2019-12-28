import NotFoundPage from "./pages/notfound";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import { RouteConfig } from "./routing";

export const getHomeRoute = () => '/';
export const getSignUpRoute = () => '/signup';
export const getNotFoundRoute = () => '/not-found';

const notFoundPath = getNotFoundRoute();

const appRoutes : RouteConfig[] = [
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