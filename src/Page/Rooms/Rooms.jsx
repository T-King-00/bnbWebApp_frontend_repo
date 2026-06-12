import {useEffect, useState} from "react";
import {GetAvailableRooms} from "../../API/GetListings.js";
import RoomListings from "../../components/RoomListings/RoomListings.jsx";
import SearchBar from "../../components/searchBar/SearchBar.jsx";


function Rooms() {
    const [roomsAvailable, setRoomsListing] = useState([]);

    useEffect(() => {
        GetAvailableRooms()
            .then(setRoomsListing)
            .catch(console.error)
    },[]);
    return(
        <>
            <SearchBar/>
            <RoomListings data={roomsAvailable}/>

        </>
    )
}
export default Rooms;