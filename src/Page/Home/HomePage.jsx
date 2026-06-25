
import { NavLink } from "react-router";

function HomePage() {
    return (
        <section className="bg-bg text-text">
            <div className="mx-auto grid min-h-[calc(78vh-88px)] max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
                <div>
                    <p className="mb-4 text-sm font-black uppercase tracking-widest text-orange-500">
                        Comfortable stays made simple
                    </p>
                    <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-normal text-text sm:text-5xl">
                        Find a welcoming bed and breakfast for your next trip.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
                        This website helps guests explore available rooms, compare details,
                        and book a relaxing stay at our bed and breakfast hotel. Whether you
                        are planning a weekend visit, a business stopover, or a quiet getaway,
                        you can quickly find the room that fits your needs.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <NavLink
                            to="/rooms"
                            className="rounded-full bg-primary px-6 py-3 text-sm font-black text-primary-text shadow-lg shadow-cyan-900/10 transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                        >
                            Browse Rooms
                        </NavLink>
                        <span className="text-sm font-bold text-text-muted">
                            View room options, prices, and availability.
                        </span>
                    </div>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-6 shadow-xl shadow-slate-900/10">
                    <h2 className="text-xl font-black text-text">
                        What you can do here
                    </h2>
                    <div className="mt-6 grid gap-4">
                        <div className="rounded-xl border border-border bg-surface-soft p-4">
                            <h3 className="font-black text-text">Explore rooms</h3>
                            <p className="mt-1 text-sm leading-6 text-text-muted">
                                See available rooms and choose the option that matches your stay.
                            </p>
                        </div>
                        <div className="rounded-xl border border-border bg-surface-soft p-4">
                            <h3 className="font-black text-text">Check details</h3>
                            <p className="mt-1 text-sm leading-6 text-text-muted">
                                Review comfort, capacity, and room information before booking.
                            </p>
                        </div>
                        <div className="rounded-xl border border-border bg-surface-soft p-4">
                            <h3 className="font-black text-text">Book with ease</h3>
                            <p className="mt-1 text-sm leading-6 text-text-muted">
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
