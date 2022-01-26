import React, { useState, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/loginContext";

export default function SignUp() {
    let navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signup = useContext(UserContext).signup;

    async function signUp() {
        return await signup(email, username, password);
    }

    return(
        <>
            <form onSubmit={async e => {
                e.preventDefault(); 
                const response = await signUp(); 
                console.log(response);
                navigate('/userprofile');
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
                <input type="password" name="password2"  />
                </label><br/>

                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}