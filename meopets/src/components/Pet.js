import {useNavigate, useParams} from "react-router-dom";

export default function Pet(){
    let navigate = useNavigate();
    let params = useParams();

    return (
        <>
            <h2>{params.petId}</h2>
            <p>Image of pet goes here</p>

            <button>Feed me!</button>
            <button>Play with me!</button>

            <br/><br/>

            <button onClick={() => {
                navigate("/userprofile")
            }}>
                Go back
            </button>
        </>
    );
}