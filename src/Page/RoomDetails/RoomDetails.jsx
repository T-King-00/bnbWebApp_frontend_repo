import {GetRoomDetails} from "../../API/GetAPIs.jsx";
import {NavLink, useParams, useNavigate} from "react-router";
import {create} from "zustand";
import {useEffect , useState} from "react";
import {useDateStore} from "../Rooms/Rooms.jsx";


const useRoom=create((set)=>({
    room:null,
    setRoom: (room) => set({room}),
}))
const roomImage =
    "https://images.trvl-media.com/lodging/16000000/15620000/15617200/15617176/248f37ce.jpg?impolicy=resizecrop&rw=1200&ra=fit";
function RoomDetails() {

    const {id}=useParams();
    const roomId=Number(id);
    const room=useRoom(state => state.room);
    const setRoom=useRoom(state => state.setRoom);


    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const checkInDate = useDateStore((state)=> state.checkInDate);
    const checkOutDate = useDateStore((state)=> state.checkOutDate);

    useEffect(() => {
        //acts as a render guard to prevent null object and string
        if (!Number.isInteger(roomId) ) {
            setErrorMessage("Invalid room id.");
            setIsLoading(false);
            return;
        }

        GetRoomDetails(roomId,checkInDate,checkOutDate)
            .then((roomData)=>{
                setRoom(roomData);
                setErrorMessage("")
            })
            .catch((error)=>{
                setRoom(null);
                setErrorMessage(error.message)
            })
            .finally(() => setIsLoading(false));
    },[setRoom] );
    if (isLoading) {
        return (
            <section className="min-h-[70vh] bg-bg px-4 py-16 text-text sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl animate-pulse rounded-[2rem] border border-border bg-surface p-6 shadow-xl shadow-slate-900/10">
                    <div className="h-80 rounded-[1.5rem] bg-surface-soft" />
                    <div className="mt-8 h-10 w-2/3 rounded-full bg-surface-soft" />
                    <div className="mt-4 h-5 w-1/2 rounded-full bg-surface-soft" />
                </div>
            </section>
        );
    }
    if (errorMessage ) {
        return (
                <section className="grid min-h-[70vh] place-items-center bg-bg px-4 py-16 text-text">
                    <div className="max-w-xl rounded-[2rem] border border-border bg-surface p-8 text-center shadow-xl shadow-slate-900/10">
                        <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">Room details</p>
                        <h1 className="mt-3 text-3xl font-black tracking-tight">Unable to show this room</h1>
                        <p className="mt-3 text-text-muted">{ "The room could not be found."}</p>
                        <NavLink
                            to="/rooms"
                            className="mt-6 inline-flex rounded-2xl bg-primary px-5 py-3 font-bold text-primary-text transition hover:bg-primary-hover"
                        >
                            Back to rooms
                        </NavLink>
                    </div>
                </section>
        );

    }


    const guestCount = room.maxGuestsAmount ;
    const basePrice = room.basePrice ?? "Contact us";
    const amenities = room.amenities?.length ? room.amenities : ["Breakfast included", "Free Wi-Fi", "Private bath"];

    return (
        <section className="bg-bg text-text">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:px-8 lg:py-14">
                <article className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl shadow-slate-900/10">
                    <div className="relative isolate min-h-[24rem] overflow-hidden bg-surface-soft">
                        <img
                            src={roomImage}
                            alt={`${room.type}   room`}
                            className="relative z-0 h-full min-h-[24rem] w-full object-cover"
                        />
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                        <div className="absolute bottom-0  z-20 left-0 right-0 p-6 text-white sm:p-8">
                            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">B&B room</p>
                            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">
                                {room.type}
                            </h1>
                        </div>
                    </div>

                    <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_18rem]">
                        <div>
                            <div className="flex flex-wrap gap-3">
                                <span className="rounded-full bg-surface-soft px-4 py-2 text-sm font-bold text-primary">
                                    {guestCount} guests
                                </span>
                                <span className="rounded-full bg-surface-soft px-4 py-2 text-sm font-bold text-primary">
                                    {room.size ?? "Cozy"} m²
                                </span>
                                <span className="rounded-full bg-surface-soft px-4 py-2 text-sm font-bold text-primary">
                                    Breakfast stay
                                </span>
                            </div>

                            <h2 className="mt-8 text-2xl font-black tracking-tight">Room overview</h2>
                            <p className="mt-3 max-w-3xl text-lg leading-8 text-text-muted">
                                {room.description || "A calm, comfortable room prepared for a relaxed bed and breakfast stay."}
                            </p>

                            <h2 className="mt-10 text-2xl font-black tracking-tight">Amenities</h2>
                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                {amenities.map((amenity) => (
                                    <div
                                        key={typeof amenity === "string" ? amenity : amenity.id ?? amenity.name}
                                        className="rounded-2xl border border-border bg-surface-soft px-4 py-3 font-bold"
                                    >
                                        {typeof amenity === "string" ? amenity : amenity.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <aside className="rounded-[1.5rem] border border-border bg-surface-soft p-5">
                            <p className="text-sm font-black uppercase tracking-[0.22em] text-text-muted">From</p>
                            <p className="mt-2 text-4xl font-black tracking-tight text-primary">{basePrice}</p>
                            <p className="mt-1 text-sm font-bold text-text-muted">SEK per night</p>
                            <div className="mt-6 space-y-3 text-sm font-bold text-text-muted">
                                <p>Flexible cancellation</p>
                                <p>Breakfast included</p>
                                <p>Local host support</p>
                            </div>
                            <NavLink
                                to={`/rooms/${room.id}/bookingForm`}
                                className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-3 font-black text-primary-text shadow-lg shadow-cyan-900/10 transition hover:-translate-y-0.5 hover:bg-primary-hover"
                            state={{room}}>
                                Book this room
                            </NavLink>
                            <button
                                type="button"
                                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border border-border bg-surface px-5 py-3 font-black text-text-muted shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:bg-surface-soft hover:text-primary focus:outline-none focus:ring-2 focus:ring-focus-ring"
                                onClick={()=>navigate(-1)}
                            >
                                Back
                            </button>
                        </aside>
                    </div>
                </article>

                <aside className="h-fit rounded-[2rem] border border-border bg-surface p-6 shadow-2xl shadow-slate-900/10 lg:sticky lg:top-28">
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">Stay summary</p>
                    <h2 className="mt-3 text-2xl font-black tracking-tight">A calm B&B escape</h2>
                    <dl className="mt-6 space-y-4">
                        <div className="flex justify-between gap-4 border-b border-border pb-4">
                            <dt className="font-bold text-text-muted">Room</dt>
                            <dd className="font-black">#{room.id}</dd>
                        </div>
                        <div className="flex justify-between gap-4 border-b border-border pb-4">
                            <dt className="font-bold text-text-muted">Capacity</dt>
                            <dd className="font-black">{guestCount}</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                            <dt className="font-bold text-text-muted">Size</dt>
                            <dd className="font-black">{room.size ?? "-"} m²</dd>
                        </div>
                    </dl>
                </aside>
            </div>
        </section>
    );
}

export default RoomDetails;
