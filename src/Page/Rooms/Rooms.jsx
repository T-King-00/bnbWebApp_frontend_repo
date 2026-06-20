import {useEffect} from "react";
import {GetAllRooms, GetAvailableRoomsWithFilter} from "../../API/GetAPIs.jsx";
import RoomListings from "../../components/Rooms/RoomListings/RoomListings.jsx";
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import {useNoOfGuests} from "../../components/searchBar/SearchBar.jsx";
import {create} from "zustand";

export const useDateStore = create((set) => ({
    checkInDate: "",
    checkOutDate: "",
    setCheckInDate: (date) => set({checkInDate: date}),
    setCheckOutDate: (date) => set({checkOutDate: date}),
}))


export const useRoomsList = create((set) => ({
    rooms: [],
    setRoomsListing: (roomsAvailable) => set({rooms: roomsAvailable}),

}))



function Rooms() {
    const {checkInDate, checkOutDate} = useDateStore(state => state);
    const noOfGuests=useNoOfGuests(state=>state.noOfGuests);


    const rooms = useRoomsList(state => state.rooms);
    const setRoomsListing=useRoomsList(state => state.setRoomsListing);

    const  handleSearch = (checkInDate,checkOutDate) => {

        if(!checkInDate || !checkOutDate)
        {
            return ;
        }
        console.log(typeof checkInDate);


        GetAvailableRoomsWithFilter(checkInDate, checkOutDate,noOfGuests)
            .then((rooms) => setRoomsListing(rooms))
    }

    useEffect(() => {
        GetAllRooms()
            .then(setRoomsListing)
    }, []);


    return(
        <section className="min-h-[calc(100vh-88px)] bg-bg px-4 py-10 text-text sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 max-w-3xl">
                    <p className="text-sm font-black uppercase tracking-widest text-orange-500">
                        Rooms and availability
                    </p>
                    <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-text sm:text-5xl">
                        Choose the room that fits your stay.
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-text-muted">
                        Compare comfort, size, capacity, and pricing before moving into the booking flow.
                    </p>
                </div>
                <SearchBar  onSearch={handleSearch}/>
              <p>
              </p>
                <RoomListings data={rooms} />
            </div>
        </section>
    )
}
export default Rooms;

