import { useState } from "react";
import { Outlet } from "react-router-dom";
import Pets from "./Pets";

export default function UserProfile(props) {
    const [currency, setCurrency] = useState(300);
    const [greeting, setGreeting] = useState("Welcome Back, Bobble!");


    return (
        <>
            <div className="user-disp">
                <div className="currency">
                    <img src="https://cdn-icons-png.flaticon.com/512/550/550638.png" alt="coin stack"
                         className="coins-img"/>
                    <p className="coins">{currency}</p>
                </div>
                <div className="prof-msg">
                    <h4 className="prof-msg-txt">{greeting}</h4>
                </div>
            </div>


            <Pets/> {/* Render grid cells/flexboxes of all pets the user owns */}

            {/* Outlet sets this component as the parent route:
            
            UserProfile will be the parent route of Pet, path = "/userprofile"
            When the user clicks on an individual, pet, they will be taken
            to that pet's profile page, path = "/userprofile/petnamehere" */}
            <Outlet/>
        </>
    );
}