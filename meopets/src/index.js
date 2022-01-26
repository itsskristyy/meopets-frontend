import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/App';
import Home from "./components/Home";
import Minigame from './components/Minigame';
import Pet from "./components/Pet";
import UserProfile from "./components/UserProfile";
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            {/* Setting App as the parent route will display the navbar in all nested routes */}
            <Route path="/" element={<App />} >
                <Route path="home" element={<Home />} />
                <Route path="userprofile" element={<UserProfile />} />
                <Route path="userprofile/:petId" element={<Pet />} />
                <Route path="/game" element={<Minigame/>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
