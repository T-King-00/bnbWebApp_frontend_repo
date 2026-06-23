import "./RoomListings.css"
import CardItem from "../CardItem/CardItem.jsx";

function RoomListings({data = []}) {

    const items = Array.isArray(data) ? data : [];

    if (items.length !== 0) {
        return (
            <div
                className={"Booking-list-container mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
                {
                    items.map(item =>
                        <CardItem key={item.id} data={item}/>
                    )
                }
            </div>
        )
    }
    else
    {
        return (
            <div className="mt-8 rounded-3xl border border-border bg-surface-soft px-6 py-12 text-center shadow-lg shadow-slate-900/10">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">
                    No rooms available
                </p>
                <h2 className="mt-3 text-2xl font-black text-text">
                    No rooms are available at the moment
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-text-muted">
                    Try changing your dates, guest count, or search filters to find more available stays.
                </p>
            </div>

        )

    }
}


export default RoomListings;

/*
<ul>
                
                {
                    Items.map(item =>
                    <li><CardItem data={item}/>
                    </li>
                    
                )}
            </ul>
            
 */
