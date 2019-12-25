import React from "react";
import { Link } from "react-router-dom";
import { SIGN_UP } from "../routes";

function SignInPage() {

    return (
        <>
            <h1>Sign In</h1>
            <Link to={SIGN_UP}>Sign Up</Link>
        </>
    );
}

export default SignInPage;