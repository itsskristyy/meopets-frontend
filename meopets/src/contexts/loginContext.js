import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* login/user Context. Here is where the global state gets defined. */

/* context provider */
export const UserContext = React.createContext({
    token: {},
    isLoggedIn: {},
    username: {},
    signUp: (email, username, password, firstPetName, firstPetType) => {},
    logIn: (username, password) => {},
    logOut: () => {}
});

export default function Users(props) {
    // Context's states - user and active user's pet(s)
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState("");
    let isLoggedIn = !!token;
    console.log(token);

    // Login function. Sends the POST request to the login route with username and password as bodies. 
    // More error handling might be needed tbh (or handling errors from the API).
    async function logIn(username, password) {
        const response = await axios.post('https://virtual-pets.herokuapp.com/login', {
            username: username,
            password: password
        })
            .catch(function (error) {
                if (error.response) {
                    alert ("Username or password is incorrect, or does not exist.");
                }
            });
        // Assuming login went well, the user state is updated with the response data.
        setToken(response.data.token);
        setUsername(username);
        return response;
    }

    // Signup function. Similar to login, except here we're creating a new account. POST. 
    // Request body also includes email. These are also validated on the backend for duplicates,
    // but that kind of handling needs to be included for the user somehow (we can even do it automatically when
    // the user stops typing (with debouncer - see my City and Giphy apps) though I'd need to add another route).
    async function signUp(email, username, password, firstPetName, firstPetType) {
        const response = await axios.post('https://virtual-pets.herokuapp.com/signup', {
            email: email,
            username: username,
            password: password,
            firstPetName: firstPetName,
            firstPetType: firstPetType
        });
        // The user is automatically signed in (this can be changed, of course).
        setToken(response.data.token);
        setUsername(username);
        return response;
    }

    function logOut() {
        setToken(null);
        setUsername("");
    }

    // The context component is provided to all the children together with all the values we specified here.
    return (
        <UserContext.Provider value={{
            token: token,
            isLoggedIn: isLoggedIn,
            username: username, 
            signup: signUp, 
            login: logIn, 
            logout: logOut
        }}>
            {props.children}
        </UserContext.Provider>
    )
}