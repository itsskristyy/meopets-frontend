import {Link, NavLink, Outlet} from 'react-router-dom';
import '../App.css';
import Home from './Home';
import UserProfile from './UserProfile';

function App() {
    return (
        <>
            {/* Todo: Please move nav styling into App.css */}
            <nav>
                <Link className="link" to={`/home`}>
                    <h1>Meopets</h1> {/* Click on logo to redirect to Home */}
                </Link>

                <NavLink className="nav-link" style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : ""
                    };}}
                         to={`/userprofile`}>
                    My Profile
                </NavLink> |{" "}

                <NavLink className="nav-link" style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : ""
                    };}}
                         to={`/fishing`}>
                    Fishing Pond
                </NavLink>
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