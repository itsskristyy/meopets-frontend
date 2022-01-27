import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from './components/App';
import Home from "./components/Home";
import Fishinggame from './components/Fishinggame';
import Goldgame from './components/Goldgame';
import Login from "./components/Login";
import Pet from "./components/Pet";
import SignUp from './components/Signup';
import UserProfile from "./components/UserProfile";
import Store from './components/Store';

import UsersProvider from './contexts/loginContext';
import PetsProvider from './contexts/petsContext';

import './index.css';

/* To use context in our app, we import the UsersProvider (line 9) and wrap our
entire app in it (lines 17, 29). Note: as a provider, the loginContext.js file is imported
directly. We'll see later (in Home.js) that context consumers will destructure on import. */

ReactDOM.render(
    <UsersProvider>
      <PetsProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="userprofile" element={<UserProfile />} />
                    <Route path="userprofile/:userName/:petId" element={<Pet />} />
                    <Route path="fishing" element={<Fishinggame/>}/>
                <Route path="goldgame" element={<Goldgame/>}/>
                <Route path="store" element={<Store/>}/>

                    <Route path="*" element={
                        <main style={{ padding: "1rem" }}>
                            <p>Invalid URL</p>
                        </main>
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
      </PetsProvider>
    </UsersProvider>,
    document.getElementById('root')
);
