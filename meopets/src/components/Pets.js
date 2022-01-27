import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/loginContext';
import { PetsContext } from '../contexts/petsContext';
import petImg from './petmapper';
export default function Pets(){
    //let pets = getPets(); // Grab pet(s) from dummy data
    const user = useContext(UserContext);
    const pets = useContext(PetsContext);
    
    console.log(pets.pets)

    return(
        <div>
            {/* Map through data and display a div for each pet */}
            {pets.pets && Object.keys(pets.pets).map(key => (
                <div>
                    {/* Clicking on the pet's name will redirect you to its own page */}
                    <Link className="pet" to={`/userprofile/${user.username}/${pets.pets[key].id}`}>
                        {pets.pets[key].name}
                    </Link>
                    <img src={petImg[pets.pets[key].type]} alt={pets.pets[key].name} className='all-pet-img' />
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