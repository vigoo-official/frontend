import React from "react";
import { Link } from "react-router-dom"
import { SIGN_IN } from "../routes";

function SignUpPage() {

    return (
        <>
            <h1>Sign Up</h1>
            <Link to={SIGN_IN}/>
        </>
    );
}

export default SignUpPage;