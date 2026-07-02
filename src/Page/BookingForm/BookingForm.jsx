import "./BookingForm.css";
import {PostBookingReq, PostCustomerData} from "../../API/PostAPIs.jsx";
import {useState} from "react";
import {useParams, useNavigate, useLocation} from "react-router";
import {useDateStore} from "../Rooms/Rooms.jsx";
import {differenceInCalendarDays, parseISO} from "date-fns";
import {useNoOfGuestsStore} from "../../components/searchBar/SearchBar.jsx";
import {create} from "zustand";



const useCustomerIdStore=create((set)=>({
    customerId:null,
    setCustomerId:(customerId)=>set({customerId}),

}))

 function BookingForm() {

    const location = useLocation();

    const room = location.state?.room;
    const {id} = useParams();
    const roomId = Number(id);

    //for backward navigation
    const navigate = useNavigate();
    //using global zustand states
    //  for including date .
    const checkInDate = useDateStore((state) => state.checkInDate);
    const checkOutDate = useDateStore((state) => state.checkOutDate);
    const durationOfStay = checkInDate && checkOutDate
        ? Math.max(0, differenceInCalendarDays(parseISO(checkOutDate), parseISO(checkInDate)))
        : 0;
    const noOfGuests = useNoOfGuestsStore((state) => state.noOfGuests);
    const [paymentMethod, setPaymentMethod] = useState("pay on arrival");

    const form = document.getElementById("bookingForm-data");

    const customerId = useCustomerIdStore(state => state.customerId);
    const setCustomerId = useCustomerIdStore(state => state.setCustomerId);
    const handleBooking = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const guestFirstName = formData.get("GuestFirstName");
        const guestLastName = formData.get("GuestLastName");
        const guestMobileNumber = formData.get("GuestMobileNumber");
        const numberOfGuests = formData.get("NumberOfGuests");
        const guestEmail = formData.get("GuestEmail");

        // to add more data to form
        //use formData.append();

        const customerResponse = await PostCustomerData({
            FirstName: guestFirstName,
            LastName: guestLastName,
            Email: guestEmail,
            PhoneNumber: guestMobileNumber,
        });

        console.log("CustomerResponse", customerResponse.data.id);
        setCustomerId(customerResponse.data.id)

        const bookingReq = {
            CustomerId: customerResponse.data.id,
            RoomId: roomId,
            HotelId: 1,
            CheckInDate: checkInDate,
            CheckOutDate: checkOutDate,
            NumberOfGuests: parseInt(numberOfGuests),

        };
        console.log("Booking req", bookingReq);

        await PostBookingReq(bookingReq).then((response) => {
                const booking = response.data.bookingResponseDto;
                console.log("booking", booking);
                navigate(`${booking.id}/bookingSuccess`)
            }
        ).catch((err) => {
            const errorMsg = err;
            console.log("error", errorMsg)
            navigate(`/bookingFailed`, {state: {errorMsg}})
        });
    }


    return (

        <section className="booking-page">
            <div className="booking-page__header">
                <span className="booking-page__eyebrow">Secure booking</span>
                <h1>Complete your stay</h1>
                <p>Confirm guest details and choose how you want to pay for your B&B reservation.</p>
            </div>

            <div className="booking-layout">
                <form id="bookingForm-data" className="booking-form" onSubmit={handleBooking}>
                    <section className="booking-card" aria-labelledby="guest-details-title">
                        <div className="booking-card__heading">
                            <span className="booking-card__step">01</span>
                            <div>
                                <h2 id="guest-details-title">Who's checking in?</h2>
                                <p> Room number  {room.id}, sea-view double room with breakfast included.</p>
                            </div>
                        </div>

                        <div className="booking-amenities" aria-label="Room amenities">
                            <span>Free Wi-Fi</span>
                            <span>Breakfast</span>
                            <span>Private bath</span>
                        </div>

                        <div className="booking-fields">
                            <div className="booking-field">
                                <label htmlFor="GuestFirstName">First name</label>
                                <input type="text" id="GuestFirstName" name="GuestFirstName" placeholder="Tony" />
                            </div>

                            <div className="booking-field">
                                <label htmlFor="GuestLastName">Last name</label>
                                <input type="text" id="GuestLastName" name="GuestLastName" placeholder="Stark" />
                            </div>

                            <div className="booking-field booking-field--full">
                                <label htmlFor="GuestEmail">Email</label>
                                <input type="email" id="GuestEmail" name="GuestEmail" placeholder="tony@example.com" />
                            </div>

                            <div className="booking-field booking-field--full">
                                <label htmlFor="GuestMobileNumber">Mobile number</label>
                                <input type="tel" id="GuestMobileNumber" name="GuestMobileNumber" placeholder="+46 70 123 45 67" />
                            </div>
                            <div className="booking-field">
                                <label htmlFor="NumberOfGuests">Number of Guests</label>
                                <input type="number" id="NumberOfGuests" name="NumberOfGuests" placeholder="1" value={noOfGuests} readOnly/>
                            </div>
                        </div>

                    </section>

                    <section className="booking-card" aria-labelledby="payment-method-title">
                        <div className="booking-card__heading">
                            <span className="booking-card__step">02</span>
                            <div>
                                <h2 id="payment-method-title">Payment method</h2>
                                <p>Choose whether to secure the room now or settle payment at check-in.</p>
                            </div>
                        </div>

                        <div className="payment-options" role="group" aria-label="Payment method">
                            <label
                                className={`payment-option ${paymentMethod === "pay with card" ? "payment-option--selected" : ""}`}
                                htmlFor="pay-wz-card"
                            >
                                <input
                                    type="radio"
                                    id="pay-wz-card"
                                    name="PaymentMethod"
                                    value="pay with card"
                                    checked={paymentMethod === "pay with card"}
                                    onChange={(event)=>setPaymentMethod(event.target.value)}
                                />
                                <span>Card</span>
                                <small>Fast confirmation</small>
                            </label>

                            <label
                                className={`payment-option ${paymentMethod === "pay on arrival" ? "payment-option--selected" : ""}`}
                                htmlFor="pay-on-arrival"
                            >
                                <input
                                    type="radio"
                                    id="pay-on-arrival"
                                    name="PaymentMethod"
                                    value="pay on arrival"
                                    checked={paymentMethod === "pay on arrival"}
                                    onChange={(event)=>setPaymentMethod(event.target.value)}
                                />
                                <span>Pay on arrival</span>
                                <small>Settle at reception</small>
                            </label>
                        </div>

                        <button value="submit" type="Submit"  className="booking-submit">
                            Confirm booking
                        </button>

                        <button type="button" className="booking-cancel" onClick={()=>navigate(-1)}>
                            Back
                        </button>
                    </section>
                </form>

                <aside className="booking-summary" aria-label="Booking summary">
                    <span className="booking-summary__label">Booking summary</span>
                    <h2>Sea-view double</h2>
                    <dl>
                        <div>
                            <dt>Room</dt>
                            <dd>{room.id}</dd>
                        </div>
                        <div>
                            <dt>Number of Guests</dt>

                            <dd>{noOfGuests}</dd>
                        </div>
                        <div>
                            <dt>Stay</dt>
                            <dd>{durationOfStay}</dd>
                        </div>
                        <div>
                            <dt>Check-In Date</dt>
                            <dd>{checkInDate}</dd>
                        </div>
                        <div>
                            <dt>Check-Out Date</dt>
                            <dd>{checkOutDate}</dd>
                        </div>

                        <div className="booking-summary__total">
                            <dt>Total</dt>
                            <dd>{room.totalPrice}</dd>
                        </div>
                    </dl>
                    <p>Includes breakfast, taxes, and flexible cancellation until 24 hours before arrival.</p>
                </aside>
            </div>
        </section>
    );

}

export default BookingForm;
