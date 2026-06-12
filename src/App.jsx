import './App.css'
import { Outlet } from 'react-router'

import RoomListings from "./components/RoomListings/RoomListings.jsx";
import Header from "./components/Header/Header.jsx";
import "./API/apiBase.js"
import {GetAvailableRooms} from "./API/GetListings.js";
import {useEffect, useState} from "react";
import SearchBar from "./components/searchBar/SearchBar.jsx";
import Footer from "./components/Footer/Footer.jsx";



function App() {

    
    return (
        <div id={"App"} >
            <Header></Header>
            <main>
                <Outlet/>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default App;
