import axios from "axios";
import React, { useEffect, useState } from "react";

/* login/user Context. Here is where the global state gets defined. */

/* context provider */
export const UserContext = React.createContext({
    activeUser: {},
    activeUserPet: {},
    signUp: (email, username, password) => {},
    logIn: (username, password) => {}
});

export default function Users(props) {
    // Context's states - user and active user's pet(s)
    const [activeUser, setActiveUser] = useState({userId: null, token: null});
    const [activeUserPet, setActiveUserPet] = useState("");

    // Login function. Sends the POST request to the login route with username and password as bodies. 
    // More error handling might be needed tbh (or handling errors from the API).
    async function logIn(username, password) {
        const response = await axios.post('https://virtual-pets.herokuapp.com/login', {
            username: username,
            password: password
        });
        // Assuming login went well, the user state is updated with the response data.
        setActiveUser(prevUser => {
            const newUser = {};
            newUser.userId = response.data.userId;
            newUser.token = response.data.token;
            return newUser
        });
        console.log(activeUser);
        return response;
    }

    // Signup function. Similar to login, except here we're creating a new account. POST. 
    // Request body also includes email. These are also validated on the backend for duplicates,
    // but that kind of handling needs to be included for the user somehow (we can even do it automatically when
    // the user stops typing (with debouncer - see my City and Giphy apps) though I'd need to add another route).
    async function signUp(email, username, password) {
        const response = await axios.post('https://virtual-pets.herokuapp.com/login', {
            email: email,
            username: username,
            password: password
        });
        // The user is automatically signed in (this can be changed, of course).
        setActiveUser({userId: response.data.userId, token: response.data.token});
    }


    useEffect(() => {
        // If a user is authenticated, we'll grab their pet(s) after login and also store
        // them in the context. 
        const getPet = async () => {
            if (activeUser.userId) {
                try {
                    const userPet = await axios.get('https://virtual-pets.herokuapp.com/pets', {
                    headers: {
                        'Authorization': 'Bearer ' + activeUser.token
                    }
                });
                setActiveUserPet(userPet.data.pet[0])
                } catch(err) {
                    console.log(err.error);
                }
            }
        }
        getPet();
    }, [activeUser]);

    // The context component is provided to all the children together with all the values we specified here.
    return (
        <UserContext.Provider value={{activeUser: activeUser, activeUserPet: activeUserPet, signup: signUp, login: logIn, setActiveUser: setActiveUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

