import { useContext } from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { UserContext } from "../contexts/loginContext";
import { PetsContext } from "../contexts/petsContext";

export default function Pet(props){
    let location = useLocation();
    console.log(location);
    const params = useParams();
    const id = Number(params.petId);
    console.log(id);
    let navigate = useNavigate();
    const pets = useContext(PetsContext).pets;
    console.log(pets)
    console.log(pets[id]);
    const pet = pets[id];

    return (
        <>
            <h2>{pet.name}</h2>
            <img src={pet.image} alt={pet.name} />
            <p>Image of pet goes here</p>

            <button>Feed me!</button>
            <button>Play with me!</button>
            <br/><br/>

            {/* Clicking on the button navigates the user back to UserProfile */}
            <button onClick={() => {
                navigate("/userprofile")
            }}>
                Go back
            </button>
        </>
    );
}