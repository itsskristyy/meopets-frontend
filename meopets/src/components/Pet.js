import { useContext, useEffect } from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { UserContext } from "../contexts/loginContext";
import { PetsContext } from "../contexts/petsContext";

export default function Pet(props){
    let location = useLocation();
    const params = useParams();
    const id = Number(params.petId);
    let navigate = useNavigate();
    const pets = useContext(PetsContext).pets;
    const updatePet = useContext(PetsContext).updatePet;
    const user = useContext(UserContext);

    useEffect(() => {
        if(!user.isLoggedIn) {
            navigate('/home');
        }
    }, []);

    async function petUpdateHandler(pet) {
        return await updatePet(pet);
    }

    async function feedPet(pet) {
        const petToFeed = {...pet};
        petToFeed.hunger < 40 ? petToFeed.hunger += 10 : petToFeed.hunger = 50;
        return await petUpdateHandler(petToFeed);
    }

    async function playWithPet(pet) {
        const petToPlay = {...pet};
        petToPlay.happiness < 40 ? petToPlay.happiness += 10 : petToPlay.happiness = 50;
        return await petUpdateHandler(petToPlay);
    }


    return (
        <>
            {user.isLoggedIn &&
            <div>
                <h2>{pets[id].name}</h2>
                <img src={pets[id].image} alt={pets[id].name} />
                <p>Image of pet goes here</p>

                <button onClick={async () => await feedPet(pets[id])}>Feed me!</button>
                <button onClick={async () => await playWithPet(pets[id])}>Play with me!</button>
                <br/><br/>

                {/* Clicking on the button navigates the user back to UserProfile */}
                <button onClick={() => {
                    navigate("/userprofile")
                }}>
                    Go back
                </button>
            </div>}
        </>
    );
}