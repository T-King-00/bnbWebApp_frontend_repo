import { NavLink } from "react-router";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-surface text-text">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 text-center sm:px-6 md:grid-cols-[1.4fr_0.8fr_0.8fr] md:text-left lg:px-8">
                <div>
                    <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-text">
                            B&B
                        </span>
                        <div>
                            <h2 className="text-lg font-black text-text">Bed & Breakfast</h2>
                            <p className="text-sm font-bold text-text-muted">Comfortable stays made simple.</p>
                        </div>
                    </div>
                    <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-text-muted md:mx-0">
                        Explore rooms, check availability, and book a relaxing stay at our
                        bed and breakfast hotel.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-primary">
                        Quick links
                    </h3>
                    <nav className="mt-4 grid gap-3 text-sm font-bold text-text-muted">
                        <NavLink to="/" className="transition hover:text-primary">
                            Home
                        </NavLink>
                        <NavLink to="/rooms" className="transition hover:text-primary">
                            Rooms
                        </NavLink>
                        <NavLink to="/login" className="transition hover:text-primary">
                            Login
                        </NavLink>
                    </nav>
                </div>

                <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-primary">
                        Contact
                    </h3>
                    <div className="mt-4 grid gap-3 text-sm font-bold text-text-muted">
                        <p>info@bedandbreakfast.com</p>
                        <p>+46 123 456 789</p>
                        <p>Open every day</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-border bg-surface-soft">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-5 text-center text-sm font-bold text-text-muted sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8">
                    <p>© {currentYear} Bed & Breakfast Hotel. All rights reserved.</p>
                    <p>Designed for simple room booking.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
