import {Link} from 'react-router-dom'
import {getPets} from "../data/pet_data";

export default function Pets(){
    let pets = getPets(); // Grab pet(s) from dummy data

    return(
        <div>
            {/* Map through data and display a div for each pet */}
            {pets.map(pet => (
                <div key={pet.name}>
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