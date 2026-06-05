import './App.css'
import BookingList from "./Page/BookingList.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./API/apiBase.js"
import {GetListings} from "./API/GetListings.js";
import {useEffect, useState} from "react";

function App() {
    const [listings, setListings] = useState([]);
    
    useEffect(() => {
        GetListings()
            .then(setListings)
            .catch(console.error)
    },[]);
    
    return (
        <>
            <NavBar/>
            <BookingList data={listings}/>
        </>
    )
}

export default App;
