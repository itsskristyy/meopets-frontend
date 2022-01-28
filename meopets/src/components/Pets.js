import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/loginContext';
import { PetsContext } from '../contexts/petsContext';

export default function Pets(){
    //let pets = getPets(); // Grab pet(s) from dummy data
    const navigate = useNavigate();
    const user = useContext(UserContext);
    const pets = useContext(PetsContext);

    useEffect(() => {
        if(!user.isLoggedIn) {
            navigate('/home');
        }
    }, []);
    
    return(
        <div>
            {/* Map through data and display a div for each pet */}
            {pets.pets && Object.keys(pets.pets).map(key => (
                <div>
                    {/* Clicking on the pet's name will redirect you to its own page */}
                    <Link className="pet" to={`/userprofile/${user.user.username}/${pets.pets[key].id}`}>
                        {pets.pets[key].name}
                    </Link>

                    <ul>
                    <li>Happiness: {pets.pets[key].happiness}</li>
                    <li>Health: {pets.pets[key].health}</li>
                    <li>Hunger: {pets.pets[key].hunger}</li>
                    </ul>
                </div>
            ))}           
        </div>
    );
}