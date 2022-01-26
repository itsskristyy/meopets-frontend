import {Outlet} from "react-router-dom";
import Pets from "./Pets";

export default function UserProfile(){
    return(
        <>
            <Pets />

            <Outlet />
        </>
    );
}