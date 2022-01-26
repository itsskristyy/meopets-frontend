import axios from "axios";
import React, { useEffect, useState } from "react";

export const UserContext = React.createContext({
    activeUser: {},
    activeUserPet: {},
    signUp: (email, username, password) => {},
    logIn: (username, password) => {}
});

export default function Users(props) {
    const [activeUser, setActiveUser] = useState({userId: null, token: null});
    const [activeUserPet, setActiveUserPet] = useState("");

    async function logIn(username, password) {
        const response = await axios.post('https://virtual-pets.herokuapp.com/login', {
            username: username,
            password: password
        });
        setActiveUser(prevUser => {
            const newUser = {};
            newUser.userId = response.data.userId;
            newUser.token = response.data.token;
            return newUser
        });
        console.log(activeUser);
        return response;
    }

    async function signUp(email, username, password) {
        const response = await axios.post('https://virtual-pets.herokuapp.com/login', {
            email: email,
            username: username,
            password: password
        });
        setActiveUser({userId: response.data.userId, token: response.data.token});
    }

    useEffect(() => {
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

    return (
        <UserContext.Provider value={{activeUser: activeUser, activeUserPet: activeUserPet, signup: signUp, login: logIn, setActiveUser: setActiveUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

