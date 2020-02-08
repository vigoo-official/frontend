import { login } from "../../../../di/usecases";
import buildSignInPage from "./sginIn-page";

const SignInPage = buildSignInPage({
    onSubmit: async function (state) {
        await login(state.email, state.password);
    },
});

export default SignInPage;