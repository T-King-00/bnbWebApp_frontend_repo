import {useNavigate} from "react-router";

function BookingFailed() {

    const navigate = useNavigate();

    return(

        <section className="min-h-[calc(100vh-88px)] bg-bg px-4 py-12 text-text sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                <div className="w-full rounded-[2rem] border border-border bg-surface p-6 shadow-xl shadow-slate-900/10 sm:p-10">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-red-200 bg-red-50 text-4xl font-black text-red-600">
                        !
                    </div>

                    <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-red-600">
                        Booking failed
                    </p>
                    <h1 className="mt-3 text-3xl font-black tracking-tight text-text sm:text-5xl">
                        We could not complete your booking
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
                        The room may no longer be available, or the booking request could not be completed.
                        Please review your stay details and try again.
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        <button
                            type="button"
                            className="rounded-2xl bg-gradient-to-r from-primary to-accent-hover px-5 py-3 font-bold text-primary-text shadow-lg shadow-slate-900/10 transition hover:from-primary-hover hover:to-accent focus:outline-none focus:ring-2 focus:ring-focus-ring"
                            onClick={() => navigate(-1)}
                        >
                            Try again
                        </button>
                        <button
                            type="button"
                            className="rounded-2xl border border-border bg-surface-soft px-5 py-3 font-bold text-text transition hover:border-primary hover:bg-surface hover:text-primary focus:outline-none focus:ring-2 focus:ring-focus-ring"
                            onClick={() => navigate("/")}
                        >
                            Back to home
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookingFailed;
