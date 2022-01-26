import React from 'react';
import {Outlet} from 'react-router-dom';
import '../App.css';

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