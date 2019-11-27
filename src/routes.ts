import appRouting from "./core/routing/app-routing";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";

export const SIGN_IN = "/";
export const SIGN_UP = "/signup";

appRouting.addRoute({
    path: SIGN_IN,
    component: SignInPage,
    title: 'Sign In'
});
appRouting.addRoute({
    path: SIGN_UP,
    component: SignUpPage,
    title: 'Sign Up'
});