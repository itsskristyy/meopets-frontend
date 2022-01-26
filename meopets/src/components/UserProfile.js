import { useState } from "react"
import Pets from "./Pets"
import {Outlet} from "react-router-dom";

export default function UserProfile(props) {
    const [currency, setCurrency] = useState(300)
    const [greeting, setGreeting] = useState("Welcome Back, Bobble!")

    return (
        <>
            <div className="user-disp">
                <div className="currency">
                    <img src="https://cdn-icons-png.flaticon.com/512/550/550638.png" alt="coin stack"
                         className="coins"/>
                    <p>{currency}</p>
                </div>
                <div className="prof-msg">
                    <h4 className="prof-msg-txt">{greeting}</h4>
                </div>
            </div>
            <Pets/>

            <Outlet/>
        </>
    );
}