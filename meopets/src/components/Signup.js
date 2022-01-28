import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import { UserContext } from "../contexts/loginContext";
import { PetsContext } from "../contexts/petsContext";
import ErrorDisplay from "./ErrorDisplay";

export default function SignUp() {
    let navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState(1);

    const signup = useContext(UserContext).signup;

    async function signUp() {
        return await signup(email, username, password, petName, petType);
    };

    let submitDisabled = true;

    // function validate() {
    //     errors = {};
    //     const isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    //     if (email === '') {
    //         errors['email'] = "Email must not be empty."
    //     } else if (!isEmailValid) {
    //         errors['email'] = "Email is not in a valid format."
    //     }
    //     if (username === '') {
    //         errors['username'] = "Username must not be empty."
    //     }
    //     if (password === '') {
    //         errors['password'] = "Password must not be empty."
    //     }
    //     if (repeatPassword === '') {
    //         errors['repeatPassword'] = "Please repeat your password."
    //     } else if (repeatPassword !== password) {
    //         errors['repeatPassword'] = "Passwords don't match."
    //     }
    //     if (petName === '') {
    //         errors['petname'] = "Petname must not be empty."
    //     }
    //     if (Object.keys(errors).length === 0) {
    //         submitDisabled = false;
    //     }
    // }
    //
    // validate();

    const { register, formState: { errors }, getValues, handleSubmit, reset} = useForm({
        criteriaMode: "all"
    });
    //
    // onSubmit={async e => {
    //     e.preventDefault();
    //     const response = await signUp();
    //     if (response.status === 201) {
    //         console.log(response);
    //         navigate('/userprofile', {replace: true});
    //     } else {
    //         console.log(response.error);
    //     }

    const onSubmit = async data => {
        await signUp();
        if (data.status === 201) {
            console.log(data);
            navigate('/userprofile', {replace: true});
        } else {
            console.log(data.error);
        }
    }

    return(
// <<<<<<< Updated upstream
//         <>
//             <form onSubmit={async e => {
//                 e.preventDefault();
//                 const response = await signUp();
//                 console.log(response);
//                 navigate('/userprofile', {replace: true});
//             }}>
// =======
        <div className="signup-page">
            <h2 className="form-title">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="signup-form">
                <label>Email:<br/>
                    <input className="login-input"
                           {...register("email", {
                               required: "Email required.",
                               pattern: {
                                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                   message: "Invalid email address."
                               }
                           })}
                           onChange={e => setEmail(e.target.value)}/>
                </label>

                <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) =>
                        <div style={{color:"red", fontWeight:"bold"}}
                        >{" "}{message}</div>}
                /><br/>

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

                <label>Password:<br/>
                    <input className="login-input"
                           {...register("password1", {
                               required: "Password required.",
                               maxLength: {
                                   value: 20,
                                   message: "Password cannot be greater than 20 characters."
                               }
                           })} type="password"
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

                <label>Confirm your password:
                    <input className="login-input"
                           {...register("password2", {
                               validate: value =>
                                   value  === password || "Passwords do not match.",
                               // required: true
                           })} type="password"
                           onChange={e => setPassword(e.target.value)}/>
                </label>

                <ErrorMessage
                    errors={errors}
                    name="password2"
                    render={({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <div key={type}
                                 style={{color:"red", fontWeight:"bold"}}
                            >{message}<br/></div>
                        ))
                    }
                /><br/>

                {/*<h2>Create Your Pet</h2>*/}

                {/*<label>Name of Pet:*/}
                {/*    <input type="text" name="petname" onChange={e => setPetName(e.target.value)} />*/}
                {/*</label> <br/>*/}

                {/*<label>Type of Pet:*/}
                {/*    <select id = "dropdown" onChange={e => setPetType(Number(e.target.value))}>*/}
                {/*        <option value='1'> Blob </option>*/}
                {/*        <option value='2'> Winged Cat</option>*/}
                {/*    </select>*/}
                {/*</label><br/>*/}
                {/*<ErrorDisplay errors={errors} />*/}
                <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}