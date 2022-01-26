import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/App';
import Home from "./components/Home";
import Login from './components/Login';
import Pet from "./components/Pet";
import SignUp from './components/Signup';
import UserProfile from "./components/UserProfile";
import UsersProvider from './contexts/loginContext'; 
import './index.css';

/* To use context in our app, we import the UsersProvider (line 9) and wrap our
entire app in it (lines 17, 29). Note: as a provider, the loginContext.js file is imported
directly. We'll see later (in Home.js) that context consumers will destructure on import. */

ReactDOM.render(
    <UsersProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="home" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="userprofile" element={<UserProfile />} />
                    <Route path="userprofile/:petId" element={<Pet />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </UsersProvider>,
    document.getElementById('root')
);
