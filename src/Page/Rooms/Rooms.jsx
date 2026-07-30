import {useEffect, useState} from "react";
import { GetAvailableRoomsWithFilter} from "../../API/GetAPIs.jsx";
import RoomListings from "../../components/Rooms/RoomListings/RoomListings.jsx";
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import {useNoOfGuestsStore} from "../../components/searchBar/SearchBar.jsx";
import {create} from "zustand";
import {Spinner} from "../../components/ui/spinner.jsx";

//for date purposes
const dateNow = new Date().toISOString().split("T")[0];
const dateTomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0];

export const useDateStore = create((set) => ({
    checkInDate: dateNow,
    checkOutDate: dateTomorrow,
    setCheckInDate: (date) => set({checkInDate: date}),
    setCheckOutDate: (date) => set({checkOutDate: date}),
}))


export const useRoomsList = create((set) => ({
    rooms: [],
    setRoomsListing: (roomsAvailable) => set({rooms: roomsAvailable}),

}))



function Rooms() {

    const {checkInDate, checkOutDate} = useDateStore(state => state);
    const noOfGuests=useNoOfGuestsStore(state=>state.noOfGuests);


    const rooms = useRoomsList(state => state.rooms);
    const setRoomsListing=useRoomsList(state => state.setRoomsListing);

    const [errorMessage, setErrorMessage] = useState("");
    const  [loadingState, setLoadingState] = useState(false);
    const  handleSearch = (checkInDate,checkOutDate) => {
        setRoomsListing([])
        setErrorMessage("");
        setLoadingState(true);
        if(!checkInDate || !checkOutDate)
        {
            setErrorMessage("Please select a valid date");
            setLoadingState(false);
            return;
        }
        GetAvailableRoomsWithFilter(checkInDate, checkOutDate,noOfGuests)
            .then((rooms) => {setRoomsListing(rooms); } )
            .catch(err => setErrorMessage(err.message))
            .finally(()=>setLoadingState(false));
    }

    useEffect(() => {
        setErrorMessage("");
        setLoadingState(true);
        GetAvailableRoomsWithFilter(checkInDate, checkOutDate,noOfGuests)
            .then((rooms) => {setRoomsListing(rooms); } ).catch(err => setErrorMessage(err.message)).finally(()=>setLoadingState(false));
    }, []);


    return(
        <section className="min-h-[calc(100vh-88px)] bg-bg px-4 py-10 text-text sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 max-w-3xl">
                    <p className="text-sm font-black uppercase tracking-widest text-orange-500">
                        Rooms and availability<br/>

                    </p>
                    <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-text sm:text-5xl">
                        Choose the room that fits your stay.
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-text-muted">
                        Compare comfort, size, capacity, and pricing before moving into the booking flow.
                    </p>
                </div>
                <SearchBar  onSearch={handleSearch}/>

                {loadingState &&
                    <pre className="mt-8 rounded-3xl border border-border bg-surface-soft px-6 py-12 text-center shadow-lg shadow-slate-900/10 flex justify-center items-center ">
                        <Spinner/> Loading.......
                    </pre>
                }

                {errorMessage && !loadingState &&
                    <div className="mt-8 rounded-3xl border border-border bg-surface-soft px-6 py-12 text-center shadow-lg shadow-slate-900/10">
                        <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">
                        No rooms available
                        </p>
                        <h2 className="mt-3 text-2xl font-black text-text">
                        No rooms are available at the moment.
                        </h2>
                        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-text-muted">
                            We could not connect to the server. Please try again.
                        </p>
                        <p className="mt-2 text-sm text-red-600">
                                {errorMessage}
                        </p>
                    </div>
                }
                {!errorMessage && !loadingState && rooms.length!==0 &&
                    <RoomListings data={rooms} />
                }

                {!errorMessage && !loadingState && rooms.length===0 &&
                    <div>
                        <div className="mt-8 rounded-3xl border border-border bg-surface-soft px-6 py-12 text-center">
                            <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">
                                No rooms available
                            </p>

                            <h2 className="mt-3 text-2xl font-black text-text">
                                No rooms are available at the moment.
                            </h2>

                            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-text-muted">
                                Try changing your dates, destination, or number of guests.
                            </p>
                        </div>

                    </div>
                }

            </div>
        </section>
    )
}
export default Rooms;
