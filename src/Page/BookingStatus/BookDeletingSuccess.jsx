import {useNavigate, useParams} from "react-router";

function BookDeletingSuccess() {

    const navigate = useNavigate();
    const {bookingId} = useParams();

    return(

        <section className={"min-h-[calc(100vh-88px)] bg-bg px-4 py-12 text-text sm:px-6 lg:px-8"}>
            <div className={"mx-auto max-w-3xl"}>
                <div className={"relative overflow-hidden rounded-[2rem] border border-border bg-surface p-6 text-center shadow-xl shadow-slate-900/10 sm:p-10"}>
                    <div className={"absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/20 blur-3xl"}></div>
                    <div className={"absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-primary/15 blur-3xl"}></div>

                    <div className={"relative"}>
                        <span className={"inline-flex rounded-full border border-border bg-surface-soft px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary"}>
                            Booking removed
                        </span>

                        <div className={"mx-auto mt-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent-hover text-5xl font-black text-primary-text shadow-2xl shadow-slate-900/15 ring-8 ring-accent/10"}>
                            &#10003;
                        </div>

                        <h1 className={"mt-7 text-4xl font-black tracking-tight text-text sm:text-5xl"}>
                            Booking Deleted Successfully
                        </h1>

                        <p className={"mx-auto mt-4 max-w-xl text-base font-medium leading-7 text-text-muted sm:text-lg"}>
                            Your booking has been cancelled and removed from our reservation list.
                        </p>

                        <div className={"mx-auto mt-8 grid max-w-xl gap-3 rounded-3xl border border-border bg-surface-soft p-4 text-left sm:grid-cols-2"}>
                            <div>
                                <p className={"text-xs font-black uppercase tracking-[0.18em] text-primary"}>Status</p>
                                <p className={"mt-1 font-bold text-text"}>Deleted</p>
                            </div>
                            <div>
                                <p className={"text-xs font-black uppercase tracking-[0.18em] text-primary"}>Booking ID</p>
                                <p className={"mt-1 break-all font-bold text-text"}>{bookingId}</p>
                            </div>
                        </div>

                        <div className={"mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"}>
                            <button
                                className={"flex-1 rounded-2xl border border-border bg-surface-soft p-3 font-bold text-text transition hover:border-primary hover:bg-surface hover:text-primary focus:outline-none focus:ring-2 focus:ring-focus-ring"}
                                onClick={() => navigate("/bookings")}
                            >
                                View Bookings
                            </button>
                            <button
                                className={"flex-1 rounded-2xl bg-gradient-to-r from-primary to-accent-hover p-3 font-bold text-primary-text shadow-lg shadow-slate-900/10 transition hover:from-primary-hover hover:to-accent focus:outline-none focus:ring-2 focus:ring-focus-ring"}
                                onClick={() => navigate("/")}
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookDeletingSuccess;
