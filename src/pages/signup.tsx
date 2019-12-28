import { Link } from "react-router-dom";
import React from "react";
import { getHomeRoute } from "../routes";

function SignUpPage() {

    return (
        <>
            <h1>Sign Up</h1>
            <Link to={getHomeRoute()}>Sign In</Link>
        </>
    );
}

export default SignUpPage;