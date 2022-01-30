import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import { UserContext } from "../contexts/loginContext";

import blob from "../assets/blob.png";
import cat from "../assets/cat.png";
import apple from "../assets/apple.png"

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

    const { register, formState: { errors }, handleSubmit} = useForm({
        criteriaMode: "all"
    });

    const onSubmit = async data => {
        await signUp(data.email, data.username, data.password, data.petName, data.petType);
        navigate('/userprofile', {replace: true})
    }

    function petMap(){
        if(petType === 1) {
            return (<img src={blob} alt="blob with smiley face" className="prev-img"/>)
        }
        if(petType === 2) {
            return (<img src={cat} alt="gray cat with wings" className="prev-img"/>)
        }
        if(petType === 3) {
            return (<img src={apple} alt="granny smith apple making weird smiley face" className="prev-img"/>)
        }
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
                               // onChange={e => setPassword(e.target.value)}
                        />
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
                    </label>

                    <ErrorMessage
                        errors={errors}
                        name="petname"
                        render={({ message }) =>
                            <div style={{color:"red", fontWeight:"bold"}}>
                                {message}<br/>
                            </div>}
                    /><br/>

                    {/* PET TYPE ------------------------------------------------------------------------------------*/}
                    <label>Type of Pet:{" "}
                        <select id = "dropdown" onChange={e => 
                            {setPetType(Number(e.target.value))
                            //     let petPreview = require (petImg[e.target.value]);
                            // document.querySelector(".prev-img").src = petPreview
                        }}>
                            <option value="" disabled selected> Choose a pet </option>
                            <option value='1'> Blob </option>
                            <option value='2'> Winged Cat </option>
                            <option value='3'> Granny Smith </option>
                        </select>
                    </label><br/>
                <span>
                        {/*<img src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E" className="prev-img" />*/}
                        {/*<img className="prev-img" />*/}
                    {petMap()}
                </span>
                    <br/><br/>

                    <button className="login-input"
                            type="submit"
                            style={{padding: "0.5em"}}>Submit</button>
                </div>
            </form>
        </div>
    )
}