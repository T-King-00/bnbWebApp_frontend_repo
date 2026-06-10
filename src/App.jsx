import './App.css'
import BookingList from "./Page/BookingList.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./API/apiBase.js"
import {GetAvailableRooms} from "./API/GetListings.js";
import {useEffect, useState} from "react";
import SearchBar from "./components/searchBar/SearchBar.jsx";



function App() {
    const [roomsAvailable, setRoomsListing] = useState([]);
    
    useEffect(() => {
        GetAvailableRooms()
            .then(setRoomsListing)
            .catch(console.error)
    },[]);
    
    return (
        <>
            <NavBar/>
            <SearchBar/>
            <BookingList data={roomsAvailable}/>
        </>
    )
}

export default App;
