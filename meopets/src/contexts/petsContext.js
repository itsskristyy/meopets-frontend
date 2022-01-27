import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { UserContext } from "./loginContext";

/* login/user Context. Here is where the global state gets defined. */

/* context provider */
export const PetsContext = React.createContext({
    pets: {},
    getPets: () => {},
    addPet: (name, type) => {},
    updatePet: (pet) => {}
});

export default function Pets(props) {
    // Context's states - user and active user's pet(s)
    const initialPets = sessionStorage.getItem('pets');
    const [pets, setPets] = useState(initialPets);
    const user = useContext(UserContext);
    console.log(user.token);
    console.log(user.isLoggedIn);


    async function addPet(name, type) {
            const response = await axios.post('https://virtual-pets.herokuapp.com/pets', {
                data: {
                    name: name,
                    type: type
                },
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            });
            console.log(name, type, response);
            const pet = {};
            pet[response.data.pet.id] = response.data.pet;
            setPets(pet)
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

    async function updatePet(pet) {
        if(user.isLoggedIn) {
            try {
                console.log(pet);
                console.log(user.token);
                const updatedPet = await axios.put('https://virtual-pets.herokuapp.com/pets', {data: pet},
                {headers: {'Authorization' : 'Bearer ' + user.token}})
                console.log(updatedPet)
                const updated = updatedPet.data.pet;
                console.log(updated);
                setPets(prevPets => {
                    const newPets = {...prevPets};
                    newPets[pet.id] = updated;
                    sessionStorage.setItem('pets', newPets);
                    return newPets;
                })                
                return updated;
            } catch(err) {
                console.log(err);
            }
        }
    }

    useEffect(() => {
        const get = async () => {
            if(user.isLoggedIn) {
                setPets(await getPets());
                sessionStorage.setItem('pets', pets);
            }
        }
        get();
    }, [user.isLoggedIn]);

    return (
        <PetsContext.Provider value={{
            pets: pets,
            addPet: addPet, 
            getPets: getPets,
            updatePet: updatePet
        }}>
            {props.children}
        </PetsContext.Provider>
    )
}
