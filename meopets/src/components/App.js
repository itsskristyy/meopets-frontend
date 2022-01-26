import {Link, Outlet} from 'react-router-dom';
import '../App.css';
import Home from './Home';
import UserProfile from './UserProfile';

function App() {

    return (
        <>
            <nav style={{
                backgroundColor: "pink",
                paddingBottom: "15px",
                paddingTop: "15px",
                marginBottom: 30
            }}>
                <h1>Meopets</h1>
            </nav>
            <Outlet />
        </>
    );
}

export default App;