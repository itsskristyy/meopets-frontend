import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react'
import '../App.css';
import { UserContext } from '../contexts/loginContext'; 

function App() {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const logOut = () => {
        user.logOut();
        navigate('/home');
    };
    return (
        <>
            <nav>
                <Link className="link" to={`/home`}>
                    <h1>Meopets</h1> {/* Click on logo to redirect to Home */}
                </Link>

                {user.isLoggedIn && <NavLink className="nav-link" style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : ""
                    };}}
                         to={`/userprofile`}>
                    My Profile
                </NavLink>} |{" "}

                {user.isLoggedIn && <NavLink className="nav-link" style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : ""
                    };}}
                         to={`/fishing`}>
                    Fishing Pond
                </NavLink>}

                {user.isLoggedIn && 
                    <Link className="link" to={`/home`}>
                        <button className="logout" onClick={() => logOut()}>
                            Log out
                        </button>
                    </Link>}
            </nav>

            {/* Outlet sets this component as the parent route:

            App will be the main parent route for all pages on this site, path = "/"
            The navigation bar will always render, with all its links
            This makes it so that we don't have to copy and paste the navbar HTML
            over and over again */}
            <Outlet />
        </>
    );
}

export default App;