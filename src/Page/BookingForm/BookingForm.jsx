import "./BookingForm.css";

function BookingForm() {
    return (
        <section className="booking-page">
            <div className="booking-page__header">
                <span className="booking-page__eyebrow">Secure booking</span>
                <h1>Complete your stay</h1>
                <p>Confirm guest details and choose how you want to pay for your B&B reservation.</p>
            </div>

            <div className="booking-layout">
                <form className="booking-form">
                    <section className="booking-card" aria-labelledby="guest-details-title">
                        <div className="booking-card__heading">
                            <span className="booking-card__step">01</span>
                            <div>
                                <h2 id="guest-details-title">Who's checking in?</h2>
                                <p>Room number 204, sea-view double room with breakfast included.</p>
                            </div>
                        </div>

                        <div className="booking-amenities" aria-label="Room amenities">
                            <span>Free Wi-Fi</span>
                            <span>Breakfast</span>
                            <span>Private bath</span>
                        </div>

                        <div className="booking-fields">
                            <div className="booking-field">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" id="firstName" name="firstName" placeholder="Tony" />
                            </div>

                            <div className="booking-field">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" id="lastName" name="lastName" placeholder="Stark" />
                            </div>

                            <div className="booking-field booking-field--full">
                                <label htmlFor="mobileNumber">Mobile number</label>
                                <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="+46 70 123 45 67" />
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
                            <button type="button" className="payment-option payment-option--selected">
                                <span>Card</span>
                                <small>Fast confirmation</small>
                            </button>
                            <button type="button" className="payment-option">
                                <span>Pay on arrival</span>
                                <small>Settle at reception</small>
                            </button>
                        </div>

                        <button type="submit" className="booking-submit">
                            Confirm booking
                        </button>
                    </section>
                </form>

                <aside className="booking-summary" aria-label="Booking summary">
                    <span className="booking-summary__label">Booking summary</span>
                    <h2>Sea-view double</h2>
                    <dl>
                        <div>
                            <dt>Room</dt>
                            <dd>204</dd>
                        </div>
                        <div>
                            <dt>Guests</dt>
                            <dd>2 adults</dd>
                        </div>
                        <div>
                            <dt>Stay</dt>
                            <dd>2 nights</dd>
                        </div>
                        <div className="booking-summary__total">
                            <dt>Total</dt>
                            <dd>2,400 SEK</dd>
                        </div>
                    </dl>
                    <p>Includes breakfast, taxes, and flexible cancellation until 24 hours before arrival.</p>
                </aside>
            </div>
        </section>
    );
}

export default BookingForm;
