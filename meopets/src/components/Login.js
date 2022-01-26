import React, { useState, useContext, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../contexts/loginContext";

export default function Login() {
    let navigate = useNavigate()
    // const [user, setUser] = React.useState({
    //     username: "",
    //     password: ""
    // });
    const login = useContext(UserContext).login;
    const activeUser = useContext(UserContext).activeUser;
    const setActiveUser = useContext(UserContext).setActiveUser;

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

    return(
        <>
            <form onSubmit={async e => {
                e.preventDefault(); 
                const response = await logIn();
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
        </>
    )
}