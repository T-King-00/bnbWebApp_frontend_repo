import {GetBookings} from "../../API/GetAPIs.jsx";

import{create} from "zustand";

const useBookings = create((set) => ({
    bookings: [],
    setBookings: (bookings) => set({
        bookings: Array.isArray(bookings) ? bookings : [bookings],
    }),
}))
function Bookings() {


    const {bookings, setBookings} = useBookings(state => state);

    const fetchBooking = async () => {
        GetBookings()
            .then(setBookings)
            .catch(console.error)
    }


    return(
        <>
            <div>

            </div>
                <p>bookking page </p>
            <button className={"bg-green-300"} onClick={fetchBooking}>FetchBooking</button>
            <ul>
                {bookings.map(booking =>
                    <li key={booking.id ?? booking.bookingId}>
                        <p>Booking Id: {booking.id ?? booking.bookingId}</p>
                        <p>Check-in Date: {booking.checkInDate}</p>
                        <p>Check-out Date: {booking.checkOutDate}</p>
                        <p>Guests: {booking.guests}</p>
                        <p>Room Type: {booking.roomType}</p>
                        <p>Room Price: {booking.roomPrice}</p>
                        <p>Status: {booking.status}</p>
                    </li>)}

            </ul>
        </>
    )
}

export default Bookings;

