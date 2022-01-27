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

    const onSubmit = async data => {
        await logIn(data.username, data.password);
        navigate('/userprofile', {replace: true})
    }

    return (
        <div className="login-page">
            <h2 className="form-title">Log In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="login-form">
                <label>Username:<br/>
                    <input className="login-input"
                           {...register("username", {
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
                            <div key={type}
                                 style={{color:"red", fontWeight:"bold"}}
                            >{" "}{message}<br/><br/></div>
                        ))
                    }
                />

                {/* TODO: Validate password matches backend */}
                <label>Password:<br/>
                    <input className="login-input"
                           {...register("password1", {
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
                            <div key={type}
                                 style={{color:"red", fontWeight:"bold"}}
                            >{" "}{message}<br/></div>
                        ))
                    }
                /><br/>

                <input className="login-input"
                       type="submit"
                       style={{padding: "0.5em"}}></input>
                </div>
            </form>

            <h3 className="redirect">Don't have an account? <Link className="redirect-link" to="/signup">Sign Up Here</Link></h3>
        </div>
    );
}