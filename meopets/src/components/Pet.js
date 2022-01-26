import { useContext } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { UserContext } from "../contexts/loginContext";

export default function Pet(){
    let navigate = useNavigate();
    let params = useParams();
    const pet = useContext(UserContext).activeUserPet;

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