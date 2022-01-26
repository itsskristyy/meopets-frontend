import {Link, Outlet} from 'react-router-dom';
import '../App.css';
import Home from "./Home";

function App() {
    return (
        <>
            <nav>
                <h1>Meopets</h1>
            </nav>

            <Outlet />
        </>
    );
}

export default App;