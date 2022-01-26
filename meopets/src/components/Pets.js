import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../contexts/loginContext';

export default function Pets(){
    //let pets = getPets(); // Grab pet(s) from dummy data
    const [pets, setPets] = useState("");
    const user = useContext(UserContext);
    
    useEffect(() => {
        async function getPets() {
            const response = await axios.get('https://virtual-pets.herokuapp.com/pets', {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
                });
            setPets(response.data.pet);
        }
        getPets();
    }, []);

    return(
        <div>
            {/* Map through data and display a div for each pet */}
            {pets.length > 0 && pets.map(pet => (
                <div>
                    {/* Clicking on the pet's name will redirect you to its own page */}
                    <Link className="pet" to={`/userprofile/${pet.name}`}>
                        {pet.name}
                    </Link>

                    <ul>
                    <li>Happiness: {pet.happiness}</li>
                    <li>Health: {pet.health}</li>
                    <li>Hunger: {pet.hunger}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}