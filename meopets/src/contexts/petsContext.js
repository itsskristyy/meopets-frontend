import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./loginContext";

/* login/user Context. Here is where the global state gets defined. */

/* context provider */
export const PetsContext = React.createContext({
    pets: {},
    getPets: () => {},
    addPet: (name, type) => {}
});

export default function Pets(props) {
    // Context's states - user and active user's pet(s)
    const [pets, setPets] = useState(null);
    const user = useContext(UserContext);
    console.log(user.token);
    console.log(user.isLoggedIn);


    async function addPet(name, type) {
        const response = await axios.post('https://virtual-pets.herokuapp.com/pets', {
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        });
        return response;
    }

    async function getPets() {
        if (user.isLoggedIn) {
            try {
                const userPets = await axios.get('https://virtual-pets.herokuapp.com/pets', {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
                });
                console.log(userPets.data.pet);
                const pets = {};
                userPets.data.pet.forEach(pet => pets[pet.id] = pet);
                console.log(pets);
                return pets;
            } catch(err) {
                console.log(err.error);
            }
        }
    }

    useEffect(() => {
        const get = async () => {
            setPets(await getPets());
        }
        get();
    }, [user.isLoggedIn]);

    return (
        <PetsContext.Provider value={{
            pets: pets,
            addPet: addPet, 
            getPets: getPets
        }}>
            {props.children}
        </PetsContext.Provider>
    )
}
