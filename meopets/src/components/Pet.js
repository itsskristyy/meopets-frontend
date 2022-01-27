import { useContext, useEffect } from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { UserContext } from "../contexts/loginContext";
import { PetsContext } from "../contexts/petsContext";

// Function to check species
// pets[id].type
// If species is 1 -> return /blob.png
// If species is 2 -> return /cat.png

export default function Pet(props){
    let location = useLocation();
    const params = useParams();
    const id = Number(params.petId);
    let navigate = useNavigate();
    const pets = useContext(PetsContext).pets;
    const user = useContext(UserContext);
    useEffect(() => {
        if(!user.isLoggedIn) {
            navigate('/home');
        }
    }, []);

    return (
        <>
            {user.isLoggedIn && 
            <div>
                <h2>{pets[id].name}</h2>
                // Return function
                <img src={pets[id].image} alt={pets[id].name} />
                <p>Image of pet goes here</p>
      
            <h2>{params.petId}</h2> {/* Grab name of pet that matches URL param */}
            {/* TODO: Match image to species of pet */}
            <p>Image of pet goes here</p>

            {/* TODO: Decrement pet's hunger state */}
            <button >Feed me!</button>
            {/* TODO: Increment pet's happiness state */}
            <button>Play with me!</button>
            <button onClick={  () => {navigate("/fishing")}}>Go fishing!</button>

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