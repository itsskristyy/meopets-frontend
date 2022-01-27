import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
import Home from "./Home";
import {UserContext} from "../contexts/loginContext";

export default function HomeRedirect() {
    const user = useContext(UserContext);
    let location = useLocation();

    if (!user.isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return <Outlet />;
}