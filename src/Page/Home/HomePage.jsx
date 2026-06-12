
import { NavLink } from "react-router";

function HomePage() {
    return (
        <section className="bg-stone-50">
            <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
                <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-600">
                        Comfortable stays made simple
                    </p>
                    <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal text-stone-950 sm:text-5xl">
                        Find a welcoming bed and breakfast for your next trip.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                        This website helps guests explore available rooms, compare details,
                        and book a relaxing stay at our bed and breakfast hotel. Whether you
                        are planning a weekend visit, a business stopover, or a quiet getaway,
                        you can quickly find the room that fits your needs.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <NavLink
                            to="/rooms"
                            className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2"
                        >
                            Browse Rooms
                        </NavLink>
                        <span className="text-sm font-medium text-stone-500">
                            View room options, prices, and availability.
                        </span>
                    </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-stone-950">
                        What you can do here
                    </h2>
                    <div className="mt-6 grid gap-4">
                        <div className="rounded-xl bg-stone-50 p-4">
                            <h3 className="font-semibold text-stone-950">Explore rooms</h3>
                            <p className="mt-1 text-sm leading-6 text-stone-600">
                                See available rooms and choose the option that matches your stay.
                            </p>
                        </div>
                        <div className="rounded-xl bg-stone-50 p-4">
                            <h3 className="font-semibold text-stone-950">Check details</h3>
                            <p className="mt-1 text-sm leading-6 text-stone-600">
                                Review comfort, capacity, and room information before booking.
                            </p>
                        </div>
                        <div className="rounded-xl bg-stone-50 p-4">
                            <h3 className="font-semibold text-stone-950">Book with ease</h3>
                            <p className="mt-1 text-sm leading-6 text-stone-600">
                                Move from finding a room to reserving your stay in a simple flow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
export default HomePage;
