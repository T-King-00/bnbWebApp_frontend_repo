import { NavLink } from "react-router";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-stone-200 bg-stone-950 text-stone-200">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 text-center sm:px-6 md:grid-cols-[1.4fr_0.8fr_0.8fr] md:text-left lg:px-8">
                <div>
                    <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-text">
                            B&B
                        </span>
                        <div>
                            <h2 className="text-lg font-bold text-white">Bed & Breakfast</h2>
                            <p className="text-sm text-stone-400">Comfortable stays made simple.</p>
                        </div>
                    </div>
                    <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-stone-400 md:mx-0">
                        Explore rooms, check availability, and book a relaxing stay at our
                        bed and breakfast hotel.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-400">
                        Quick links
                    </h3>
                    <nav className="mt-4 grid gap-3 text-sm">
                        <NavLink to="/" className="transition hover:text-amber-400">
                            Home
                        </NavLink>
                        <NavLink to="/rooms" className="transition hover:text-amber-400">
                            Rooms
                        </NavLink>
                        <NavLink to="/login" className="transition hover:text-amber-400">
                            Login
                        </NavLink>
                    </nav>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-400">
                        Contact
                    </h3>
                    <div className="mt-4 grid gap-3 text-sm text-stone-400">
                        <p>info@bedandbreakfast.com</p>
                        <p>+46 123 456 789</p>
                        <p>Open every day</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-stone-800">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-5 text-center text-sm text-stone-500 sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8">
                    <p>© {currentYear} Bed & Breakfast Hotel. All rights reserved.</p>
                    <p>Designed for simple room booking.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
