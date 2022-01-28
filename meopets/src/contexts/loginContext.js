import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* login/user Context. Here is where the global state gets defined. */
//heroku url: https://virtual-pets.herokuapp.com
//localhost url: http://localhost:8080

let logoutTimer;
/* context provider */
export const UserContext = React.createContext({
    token: {},
    isLoggedIn: {},
    user: {},
    currency: {},
    signUp: (email, username, password, firstPetName, firstPetType) => {},
    logIn: (username, password) => {},
    logOut: () => {},
    updateUser: (userUpdate) => {}
});

function calculateRemainingTime(expirationTime) {
    const now = parseInt(new Date().getTime()/1000);
    const adjExpirationTime = new Date(+expirationTime).getTime();
    return adjExpirationTime - now;
}

function retrieveStoredToken() {
    const storedToken = sessionStorage.getItem('token');
    const storedExpirationTime = sessionStorage.getItem('expirationTime');
    const remainingTime = calculateRemainingTime(storedExpirationTime);

    if(remainingTime < 200) {
        sessionStorage.clear();
        return null;
    }

    return {
        token: storedToken,
        remainingTime: remainingTime
    }
}

export default function Users(props) {
    // Context's states - user and active user's pet(s)
    const tokenData = retrieveStoredToken();
    let initialToken;
    if (tokenData) {
        initialToken = tokenData.token;
    }
    //const initialToken = sessionStorage.getItem('token');
    const initialUser = !!initialToken ? JSON.parse(sessionStorage.getItem('user')) : null;
    const [token, setToken] = useState(initialToken);
    const [user, setUser] = useState(initialUser);
    const [currency, setCurrency] = useState(0);
    let isLoggedIn = !!token;

    const logOut = useCallback(() => {
        setToken(null);
        setUser(null);
        sessionStorage.clear();
        if(logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    useEffect(() => {
        if(tokenData) {
            logoutTimer = setTimeout(logOut, (tokenData.remainingTime)*1000);
        }
    }, [tokenData, logOut]);

    useEffect(() => {
        if (isLoggedIn && !currency) {
            const getCurr = async () => {
                await getCurrency();
            }
            getCurr();
        }
    }, [currency])


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
        const returnedUser = response.data.user;
        setCurrency(returnedUser.currency);
        delete returnedUser.currency;
        setToken(response.data.token);
        setUser(returnedUser);
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('expirationTime', response.data.exp);
        sessionStorage.setItem('user', JSON.stringify(returnedUser));
        console.log(response);
        const remainingTime = calculateRemainingTime(response.data.exp);
        console.log(response.data.exp, remainingTime);
        logoutTimer = setTimeout(logOut, (remainingTime-200)*1000);
        return response;
    }

    async function getCurrency() {
        const response = await axios.get('https://virtual-pets.herokuapp.com/users', {headers: {'Authorization' : 'Bearer ' + token}});
        console.log(response);
        setCurrency(response.data.user.currency);
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
        const returnedUser = response.data.user;
        setCurrency(returnedUser.currency);
        delete returnedUser.currency;
        setToken(response.data.token);
        setUser(returnedUser);
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('expirationTime', response.data.exp);
        sessionStorage.setIcccccccccccccctem('user', JSON.stringify(returnedUser));
        const remainingTime = calculateRemainingTime(response.data.exp);
        console.log(remainingTime);
        logoutTimer = setTimeout(logOut, (remainingTime-300)*1000);
        return response;
    }

    async function updateUser(userUpdate) {
        if(isLoggedIn) {
            try {
                const updatedUser = await axios.put('https://virtual-pets.herokuapp.com/users', {data: userUpdate},
                {headers: {'Authorization' : 'Bearer ' + token}})
                const updated = updatedUser.data.user;
                setCurrency(updated.currency)
                delete updated.currency;
                setUser(updated);
                sessionStorage.setItem('user', JSON.stringify(updated));
                return updated;
            } catch(err) {
                console.log(err);
            }
        }
    }


    // The context component is provided to all the children together with all the values we specified here.
    return (
        <UserContext.Provider value={{
            token: token,
            isLoggedIn: isLoggedIn,
            user: user, 
            currency: currency,
            signup: signUp, 
            login: logIn, 
            logout: logOut,
            updateUser: updateUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}