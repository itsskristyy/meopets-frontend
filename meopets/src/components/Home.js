import {Link, useNavigate} from 'react-router-dom'
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/loginContext";

/* As alluded to in index.js, to consume the context we destructure it on import, as in line 3. 
We'll also { useContext } from React in line 2. */

export default function Home() {
    let navigate = useNavigate();
    // const [user, setUser] = React.useState({
    //     username: "",
    //     password: ""
    // });
    
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

    return (
        <>
            <form onSubmit={async e => {
                e.preventDefault(); 
                const response = await logIn();
                console.log(response);
                navigate('/userprofile', {replace: true});
            }}>
                {/* TODO: Validate user exists in backend */}
                <label>Username:<br/>
                    <input type="text" name="username" onChange={e => setUsername(e.target.value)} />
                </label><br/>

                {/* TODO: Validate password matches backend */}
                <label>Password:<br/>
                    <input type="password" name="password1" onChange={e => setPassword(e.target.value)} />
                </label><br/>

                <input type="submit" value="Submit"/>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up Here</Link></p>
        </>
    );
}