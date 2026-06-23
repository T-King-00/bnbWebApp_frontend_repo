
import {useNavigate} from "react-router";

function BookingSuccess() {

    const navigate = useNavigate();

    return(

        <div className={"flex flex-col gap-4 p-5 rounded-2xl border border-border bg-surface p-4 shadow-xl shadow-slate-900/10"}>
                <div className={"text-center font-bold p-5"}>
                    <p>Booking Confirmed! </p>
                </div>
                <div className={"flex flex-col md:w-1/5 md:m-auto justify-center align-middle"}>
                    <button
                        className={"rounded-2xl bg-gradient-to-r from-primary to-accent-hover p-3 m-3 font-bold text-primary-text shadow-lg shadow-slate-900/10 hover:from-primary-hover hover:to-accent"}
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </button>
                    <button
                        className={"rounded-2xl border border-border bg-surface-soft p-3 font-bold text-text hover:border-primary hover:bg-surface hover:text-primary"}
                        onClick={() => navigate(-1)}
                    >
                       Cancel
                    </button>
                </div>
            </div>


    )

}

export default BookingSuccess;
