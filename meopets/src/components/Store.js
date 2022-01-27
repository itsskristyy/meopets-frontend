import React, { useState, useContext } from "react";
import axios from 'axios'; 
import Inventory from "./Inventory";

export default function Store() {

    return(
        <div id = 'store'>
        <Inventory/>
        </div>  
    );

}