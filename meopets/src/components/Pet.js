import { useContext, useEffect } from "react";
import { useLocation, useNavigate, useParams} from "react-router-dom";
import { UserContext } from "../contexts/loginContext";
import { PetsContext } from "../contexts/petsContext";
// import petImg from "./petmapper";
import petPreview from './petmapper';

export default function Pet(props){
    // let location = useLocation();
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
        petToFeed.hunger > 0 ? petToFeed.hunger -= 10 : petToFeed.hunger = 0;
        alert("Pet hunger decreased by 10")
        return await petUpdateHandler(petToFeed);
    }

    async function playWithPet(pet) {
        const petToPlay = {...pet};
        petToPlay.happiness += 10;
        petToPlay.hunger += 10;
        alert("Pet happiness increased by 10, hunger increased by 10")
        return await petUpdateHandler(petToPlay);
    }
    async function playFishing(pet) {
        const petToPlay = {...pet};
        petToPlay.health > 0 ? petToPlay.health -= 10 : petToPlay.health = 0;
        alert("Pet energy will decrease by 10")
        navigate("/fishing")
        return await petUpdateHandler(petToPlay);
    }
    async function playGold(pet) {
        const petToPlay = {...pet};
        petToPlay.health > 0 ? petToPlay.health -= 10 : petToPlay.health = 0;
        alert("Pet energy will decrease by 10")
        navigate("/goldgame")
        return await petUpdateHandler(petToPlay);
    }
    
    

    return (
        <>
            {user.isLoggedIn &&
            <div>
                <h1 className="pet-header">{pets[id].name}</h1>
                {/* // Return function */}
                {/*<img src={petImg[pets[id].type]} alt={pets[id].name} className="singe-pet-img"/>*/}
                <img src={petPreview(pets[id].type)} alt={pets[id].name} className="singe-pet-img"/>
      

            <button onClick={async () => await feedPet(pets[id])}>Feed me!</button>
            <button onClick={async () => await playWithPet(pets[id])}>Play with me!</button>
            <button onClick={async () => await playFishing(pets[id]) }>Go fishing!</button>
            <button onClick={async () => await playGold(pets[id]) }>Get some gold!</button>
                <br/><br/>
                <p className="changes-div"></p>
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