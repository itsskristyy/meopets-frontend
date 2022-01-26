import {Link, useNavigate} from 'react-router-dom'
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/loginContext";

export default function Home() {
    let navigate = useNavigate()
    // const [user, setUser] = React.useState({
    //     username: "",
    //     password: ""
    // });
    
    const activeUser = useContext(UserContext).activeUser;
    const login = useContext(UserContext).login;

    // useEffect(() => {
    //     if(activeUser.username) {
    //         navigate('/userprofile');
    //     }
    // }, []);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function logIn() {
        return await login(username, password);
    }

    return (
        <>
            <form onSubmit={async e => {
                e.preventDefault(); 
                const response = await logIn();
                console.log(response);
                navigate('/userprofile');
            }}>
                <label>Username:<br/>
                    <input type="text" name="username" onChange={e => setUsername(e.target.value)} />
                </label><br/>

                <label>Password:<br/>
                <input type="password" name="password1" onChange={e => setPassword(e.target.value)} />
                </label><br/>

                <input type="submit" value="Submit"/>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up Here</Link></p>
        </>
    );
}