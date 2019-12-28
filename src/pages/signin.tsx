import { Link } from "react-router-dom";
import React from "react";
import { getSignUpRoute } from "../routes";

function SignInPage() {

    return (
        <>
            <h1>Sign In</h1>
            <Link to={getSignUpRoute()}>Sign Up</Link>
        </>
    );
}

export default SignInPage;