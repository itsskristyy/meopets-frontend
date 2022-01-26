import {useNavigate, useParams} from "react-router-dom";

export default function Pet(){
    let navigate = useNavigate();
    let params = useParams();
    
    return (
        <>
            <h2>{params.petId}</h2> {/* Grab name of pet that matches URL param */}
            {/* TODO: Match image to species of pet */}
            <p>Image of pet goes here</p>

            {/* TODO: Decrement pet's hunger state */}
            <button >Feed me!</button>
            {/* TODO: Increment pet's happiness state */}
            <button onClick={  () => {navigate("/game")}}>Play with me!</button>

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