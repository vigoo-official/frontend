import React from "react";
import { Link } from "react-router-dom";
import { ModelException } from "../../../../core/exceptions/modelException";
import { getSignUpRoute } from "../../routing/routes";

const initState = {
    password: 'qweqwe',
    email: 'andrik210@gmail.com',
    error: null,
};
export type State = typeof initState;

function reducer(state: State, action: any): State {
    switch (action.type) {
        case 'changeEmail':
            return {
                ...state,
                email: action.payload,
            };
        case 'changePassword':
            return {
                ...state,
                password: action.payload,
            };
        case 'setErrors':
            return {
                ...state,
                error: action.payload,
            };
        default:
            console.warn(`Wrong action type '${action.type}'`);
            return state;
    }
}

export default function buildSignInPage({
    onSubmit,
}: {
    onSubmit: (state: State) => any,
}) {
    return function SignInPage() {
        const [state, dispatch] = React.useReducer(reducer, initState);

        const handleSubmit = React.useCallback(async function (e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();

            try {
                await onSubmit(state);
            } catch (e) {
                if (e instanceof ModelException) {
                    dispatch({ type: 'setErrors', payload: e.errors });
                }
            }
        }, [state]);


        const handleChange = React.useCallback(function (e: React.ChangeEvent<HTMLInputElement>) {
            const name = e.target.name;
            const actionType = 'change' + name.charAt(0).toUpperCase() + name.substring(1);
            dispatch({
                payload: e.target.value,
                type: actionType,
            });
        }, []);

        return (
            <>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" id="email" value={state.email} onChange={handleChange} />
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" id="password" value={state.password} onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
                {JSON.stringify(state.error)}
                <Link to={getSignUpRoute()}>Sign Up</Link>
            </>
        );
    }
}