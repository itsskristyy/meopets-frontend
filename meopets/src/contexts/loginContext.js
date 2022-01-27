import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* login/user Context. Here is where the global state gets defined. */
//heroku url: https://virtual-pets.herokuapp.com
//localhost url: http://localhost:8080

/* context provider */
export const UserContext = React.createContext({
    token: {},
    isLoggedIn: {},
    user: {},
    signUp: (email, username, password, firstPetName, firstPetType) => {},
    logIn: (username, password) => {},
    logOut: () => {},
    updateUser: (userUpdate) => {}
});

export default function Users(props) {
    // Context's states - user and active user's pet(s)
    const initialToken = sessionStorage.getItem('token');
    const initialUser = !!initialToken ? JSON.parse(sessionStorage.getItem('user')) : null;
    console.log(initialToken, initialUser);
    const [token, setToken] = useState(initialToken);
    const [user, setUser] = useState(initialUser);
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
        setUser(response.data.user);
        console.log(response);
        console.log(response.data.user)
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
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
        setUser(response.data.user);
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
        return response;
    }

    async function updateUser(userUpdate) {
        if(isLoggedIn) {
            try {
                console.log(userUpdate);
                console.log(user.token);
                const updatedUser = await axios.put('https://virtual-pets.herokuapp.com/users', {data: userUpdate},
                {headers: {'Authorization' : 'Bearer ' + token}})
                console.log(updatedUser);
                const updated = updatedUser.data.user;
                console.log(updated);
                setUser(updated);
                sessionStorage.setItem('user', JSON.stringify(updated));                
                return updated;
            } catch(err) {
                console.log(err);
            }
        }
    }

    function logOut() {
        setToken(null);
        setUser(null);
        sessionStorage.clear();
    }


    // The context component is provided to all the children together with all the values we specified here.
    return (
        <UserContext.Provider value={{
            token: token,
            isLoggedIn: isLoggedIn,
            user: user, 
            signup: signUp, 
            login: logIn, 
            logout: logOut,
            updateUser: updateUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}