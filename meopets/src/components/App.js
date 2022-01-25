import React from 'react';
import {Outlet} from 'react-router-dom';
import '../App.css';
import PetsPage from './PetsPage';

function App() {
    return (
      <PetsPage/>
    );
}

export default App;