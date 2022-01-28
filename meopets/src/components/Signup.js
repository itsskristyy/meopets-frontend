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
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState(1);

    const signup = useContext(UserContext).signup;

    async function signUp() {
        return await signup(email, username, password, petName, petType);
    };

    const { register, formState: { errors }, getValues, handleSubmit, reset} = useForm({
        criteriaMode: "all"
    });

    const onSubmit = async data => {
        await signUp(data.email, data.username, data.password, data.petName, data.petType);
        navigate('/userprofile', {replace: true})
    }

    return(
        <div className="signup-page">
            <h2 className="form-title">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="signup-form">
                    {/* EMAIL ---------------------------------------------------------------------------------------*/}
                    <label>Email:<br/>
                        <input className="login-input"
                               {...register("email", {
                                   required: "Email required.",
                                   pattern: {
                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                       message: "Invalid email address."
                                   }})}
                               onChange={e => setEmail(e.target.value)} />
                    </label>

                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) =>
                            <div style={{color:"red", fontWeight:"bold"}}
                            >{" "}{message}</div>}
                    /><br/>

                    {/* USERNAME ------------------------------------------------------------------------------------*/}
                    <label>Username:<br/>
                        <input className="login-input"
                               {...register("username", {
                                   required: "Username required.",
                                   maxLength: {
                                       value: 20,
                                       message: "Username cannot be greater than 20 characters."
                                   }
                               })}
                               onChange={e => setUsername(e.target.value)} />
                    </label>

                    <ErrorMessage
                        errors={errors}
                        name="username"
                        render={({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <div key={type}
                                     style={{color:"red", fontWeight:"bold"}}
                                >{" "}{message}<br/></div>
                            ))}
                    /><br/>

                    {/* PASSWORD ------------------------------------------------------------------------------------*/}
                    <label>Password:<br/>
                        <input className="login-input"
                               {...register("password1", {
                                   required: "Password required.",
                                   maxLength: {
                                       value: 20,
                                       message: "Password cannot be greater than 20 characters."
                                   }})}
                               type="password"
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
                            ))}
                    /><br/>

                    {/* CONFIRM PASSWORD ----------------------------------------------------------------------------*/}
                    <label>Confirm your password:<br/>
                        <input className="login-input"
                               {...register("password2", {
                                   required: "Confirmation required.",
                                   validate: value =>
                                       value  === password || "Passwords do not match.",
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
                        ))}
                    /><br/>

                    <h2>Create Your Pet</h2>

                    {/* PET NAME ------------------------------------------------------------------------------------*/}
                    <label>Name of Pet:<br/>
                        <input className="login-input"
                               {...register("petname", {
                                   required: "Pet name required."})}
                               onChange={e => setPetName(e.target.value)} />
                    </label><br/>

                    <ErrorMessage
                        errors={errors}
                        name="petname"
                        render={({ message }) =>
                            <div style={{color:"red", fontWeight:"bold"}}>
                                {message}
                            </div>}
                    /><br/>

                    {/* PET TYPE ------------------------------------------------------------------------------------*/}
                    <label>Type of Pet:{" "}
                        <select id = "dropdown" onChange={e => setPetType(Number(e.target.value))}>
                            <option value='1'> Blob </option>
                            <option value='2'> Winged Cat</option>
                        </select>
                    </label><br/><br/>

                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}