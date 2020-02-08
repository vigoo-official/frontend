import React from "react";
import { Link } from "react-router-dom";
import { getHomeRoute } from "../../routing/routes";

function SignUpPage() {

    return (
        <>
            <h1>Sign Up</h1>
            <Link to={getHomeRoute()}>Sign In</Link>
        </>
    );
}

export default SignUpPage;