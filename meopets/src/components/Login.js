import React, { useState, useContext, useEffect } from "react";

import {useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import {Link, useNavigate} from 'react-router-dom'

import { UserContext } from "../contexts/loginContext";

/* As alluded to in index.js, to consume the context we destructure it on import, as in line 3.
We'll also { useContext } from React in line 2. */

export default function Login() {
    let navigate = useNavigate();

    /* To use Context in a component, we need to first retrieve the aspects of it we want:
    Objects can be imported and assigned directly (line 16), functions will need to be wrapped in a wrapper
    (as in case of logIn in lines 31-33). */
    const activeUser = useContext(UserContext).activeUser;
    const login = useContext(UserContext).login;

    // useEffect(() => {
    //     if(activeUser.username) {
    //         navigate('/userprofile');
    //     }
    // }, []);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // async function wrapper for an async login function
    async function logIn() {
        return await login(username, password);
    }

    const { register, formState: { errors }, handleSubmit, reset} = useForm({
        criteriaMode: "all"
    });

/*async e => {
                e.preventDefault();
                const response = await logIn();
                console.log(response);
                navigate('/userprofile', {replace: true});
            }*/

    const onSubmit = async data => {
        await logIn(data.username, data.password);
        navigate('/userprofile', {replace: true})
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* TODO: Validate user exists in backend */}
                <label>Username:<br/>
                    <input {...register("username", {
                        required: "Username required.",
                        maxLength: {
                            value: 20,
                            message: "Username cannot be greater than 20 characters."
                        }
                    })}
                           onChange={e => setUsername(e.target.value)}/>
                </label>

                <ErrorMessage
                    errors={errors}
                    name="username"
                    render={({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <span key={type}>{" "}{message}</span>
                        ))
                    }
                /><br/>

                {/* TODO: Validate password matches backend */}
                <label>Password:<br/>
                    <input {...register("password1", {
                        required: "Password required.",
                        maxLength: {
                            value: 20,
                            message: "Password cannot be greater than 20 characters."
                        }})} type="password"
                           onChange={e => setPassword(e.target.value)}/>
                </label>

                <ErrorMessage
                    errors={errors}
                    name="password1"
                    render={({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <span key={type}>{" "}{message}</span>
                        ))
                    }
                /><br/><br/>


                <button type="submit">Submit</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up Here</Link></p>
        </>
    );
}