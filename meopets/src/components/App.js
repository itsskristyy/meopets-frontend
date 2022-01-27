import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react'
import '../App.css';
import { UserContext } from '../contexts/loginContext';

function App() {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const logOut = () => {
        user.logout();
        navigate('/home', {replace: true});
    };
    return (
        <header>
            <nav className="sticky-nav">
                <Link className="link" to={`/home`}>
                    <img src="./logo.png" height="120px" alt="meopets logo"/>
                </Link>

                {user.isLoggedIn && <NavLink className="nav-link" style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : ""
                    };}}
                         to={`/userprofile`}>
                    My Profile
                </NavLink>}

                {user.isLoggedIn && <NavLink className="nav-link" style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : ""
                    };}}
                         to={`/fishing`}>
                    Fishing Pond
                </NavLink>}

                {user.isLoggedIn && <NavLink className="nav-link" style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : ""
                    };}}
                         to={`/goldgame`}>
                    Gold Rush
                </NavLink>}

                {user.isLoggedIn && <NavLink className="nav-link" style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : ""
                    };}}
                         to={`/store`}>
                    Store
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
        </header>
    );
}

export default App;