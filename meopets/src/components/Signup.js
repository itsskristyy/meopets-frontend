import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function SignUp() {
    let navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function signUp() {
        const response = await axios.post('https://virtual-pets.herokuapp.com/signup', {
            email: email,
            username: username,
            password: password
        });
        const token = response.data.token;
    }

    return(
        <>
            <form onSubmit={async e => {e.preventDefault(); await signUp();}}>
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