import {Link} from 'react-router-dom'
import {getPets} from "../data/pet_data";

export default function Pets(){
    let pets = getPets();

    return(
        <div>
            {pets.map(pet => (
                <div>
                    <Link to={`/userprofile/${pet.name}`}>
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