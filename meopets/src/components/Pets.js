import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/loginContext';
import { PetsContext } from '../contexts/petsContext';
import petImg from './petmapper';
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
        <div className="pet-grid">
            {/* Map through data and display a div for each pet */}
            {pets.pets && Object.keys(pets.pets).map(key => (
                <div className="pet-card">
                    {/* Clicking on the pet's name will redirect you to its own page */}
                    <Link className="pet-name"
                          to={`/userprofile/${user.user.username}/${pets.pets[key].id}`}
                    >{pets.pets[key].name}</Link>

                    <Link className="pet-image"
                          to={`/userprofile/${user.user.username}/${pets.pets[key].id}`}
                    >
                        <img src={petImg[pets.pets[key].type]} alt={pets.pets[key].name} className='all-pet-img' />
                    </Link>

                    <ul className="pet-stats">
                        <li>Happiness: {pets.pets[key].happiness}</li>
                        <li>Health: {pets.pets[key].health}</li>
                        <li>Hunger: {pets.pets[key].hunger}</li>
                    </ul>
                </div>
            ))}           
        </div>
    );
}