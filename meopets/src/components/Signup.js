import React, { useState, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/loginContext";
import { PetsContext } from "../contexts/petsContext";
import ErrorDisplay from "./ErrorDisplay";
import petImg from "./petmapper";
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


    let errors;
    let submitDisabled = true;

    function validate() {
        errors = {};
        const isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); 
        if (email === '') {
            errors['email'] = "Email must not be empty."
        } else if (!isEmailValid) {
            errors['email'] = "Email is not in a valid format."
        } 
        if (username === '') {
            errors['username'] = "Username must not be empty."
        } 
        if (password === '') {
            errors['password'] = "Password must not be empty."
        } 
        if (repeatPassword === '') {
            errors['repeatPassword'] = "Please repeat your password."
        } else if (repeatPassword !== password) {
            errors['repeatPassword'] = "Passwords don't match."
        }
        if (petName === '') {
            errors['petname'] = "Petname must not be empty."
        }
        if (Object.keys(errors).length === 0) {
            submitDisabled = false;
        }
    }
    
    validate();

    return(
        <>
            <form onSubmit={async e => {
                e.preventDefault();
                const response = await signUp();
                if (response.status === 201) {
                    console.log(response);
                    navigate('/userprofile', {replace: true});
                } else {
                    console.log(response.error);
                }
            }}>
                <label>Email:<br/>
                    <input type="email" name="email" onChange={e => setEmail(e.target.value)}/>
                </label><br/>

                <label>Username:<br/>
                    <input type="text" name="username" onChange={e => setUsername(e.target.value)} />
                </label><br/>

                <label>Password:<br/>
                    <input type="password" name="password1" onChange={e => setPassword(e.target.value)} />
                </label><br/>

                <label>Confirm Password:<br/>
                    <input type="password" name="password2" onChange={e => setRepeatPassword(e.target.value)} />
                </label><br/>

                <h2>Create Your Pet</h2>

                <label>Name of Pet:
                    <input type="text" name="petname" onChange={e => setPetName(e.target.value)} />
                </label> <br/>

                <label>Type of Pet:
                    <select id = "dropdown" onChange={e => 
                    {setPetType(Number(e.target.value))
                    document.querySelector(".prev-img").src = petImg[e.target.value]
                    }}>
                        <option value='1'> Blob </option>
                        <option value='2'> Winged Cat</option>
                    </select>
                </label><br/>
                <span>
                        <img src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E" className="prev-img" />
                </span>
                <ErrorDisplay errors={errors} />
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}