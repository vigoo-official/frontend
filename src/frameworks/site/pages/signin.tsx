import React from "react";
import { Link } from "react-router-dom";
import { getSignUpRoute } from "../../../routes";

function SignInPage() {

    return (
        <>
            <h1>Sign In</h1>
            <Link to={getSignUpRoute()}>Sign Up</Link>
        </>
    );
}

export default SignInPage;