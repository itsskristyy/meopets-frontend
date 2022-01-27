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
                <img src={pets[id].image} alt={pets[id].name} />
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
            </div>}
        </>
    );
}