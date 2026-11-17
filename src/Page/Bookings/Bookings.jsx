import {GetBookings} from "../../API/GetAPIs.jsx";

import {useState} from "react";
import{create} from "zustand";
import {number} from "yup";

const useBookings = create((set) => ({
    bookings: [],
    setBookings: (bookings) => set({
        bookings: Array.isArray(bookings) ? bookings : [bookings],
    }),
}))
function Bookings() {


    const {bookings, setBookings} = useBookings(state => state);
    const [isLoading, setIsLoading] = useState(false);
    const [hasFetched, setHasFetched] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchBooking = async () => {
        setIsLoading(true);
        setHasFetched(true);
        setErrorMessage("");

        try {
            const bookingData = await GetBookings();
            setBookings(bookingData);
        }
        catch (error) {
            console.error(error);
            setBookings([]);
            setErrorMessage("Could not load bookings. Check that the backend server is running, then try again.");
        }
        finally {
            setIsLoading(false);
        }
    }


    return(
        <>
            <div>

            </div>
                <p>Booking page</p>
            <button className={"bg-green-300 disabled:opacity-60"} onClick={fetchBooking} disabled={isLoading}>
                {isLoading ? "Loading bookings..." : "Fetch bookings"}
            </button>

            {errorMessage && (
                <p role="alert" className={"text-red-700"}>
                    {errorMessage}
                </p>
            )}

            {isLoading && (
                <p aria-live="polite">
                    Loading bookings from the server...
                </p>
            )}

            {!isLoading && !errorMessage && hasFetched && bookings.length === 0 && (
                <p aria-live="polite">
                    No bookings found.
                </p>
            )}

            <ul>
                <br/>
                {bookings.map(booking =>
                    <li key={booking.id ?? booking.bookingId}>
                        <p>Booking Id: {booking.id ?? booking.bookingId}</p>
                        <p>Check-in Date: {booking.checkInDate}</p>
                        <p>Check-out Date: {booking.checkOutDate}</p>
                        <p>Amount of Nights: {booking.amountOfNights}</p>

                        <p>Guests: {booking.numberOfGuests}</p>
                        <p>Room Type: {booking.roomType}</p>
                        <p>Payment Choice: {booking.paymentMethod}</p>
                        <p>Payment Deadline: {booking.paymentDeadline}</p>
                        <p>Status: {booking.status}</p>
                        <br/>
                    </li>)}

            </ul>
        </>
    )
}

export default Bookings;

