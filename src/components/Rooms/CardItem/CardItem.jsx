import "tailwindcss";
import {NavLink} from "react-router";


function CardItem(props) {
    const room=props.data;
    const guestCount = room.maxGuestsAmount ?? "Unknown";
    const basePrice = room.basePrice ??  "N/A";
    console.log(room);
    return (
        
           <div className={`cardContainer bg-surface p-4 m-1 items-center flex flex-col rounded-2xl border border-border shadow-lg shadow-slate-900/10 hover:-translate-y-1 hover:shadow-2xl transition duration-200 overflow-hidden`}>
               <div className={"w-full h-48 sm:h-52 p-2 overflow-hidden"}>
                   <img className={"block h-full w-full max-w-full object-cover border border-border rounded-xl"} alt={"HotelImgPlaceHolder"} src={"https://images.trvl-media.com/lodging/16000000/15620000/15617200/15617176/248f37ce.jpg?impolicy=resizecrop&rw=1200&ra=fit"} />
               </div>
               <div className={"flex flex-col items-center gap-2 p-2 text-center"}>

                   <p className={"rounded-full bg-surface-soft px-3 py-1 text-sm font-bold text-primary"}> {guestCount} guests <span> . {room.size}m²</span> </p>
                   <h1 className="text-2xl font-black text-text leading-tight"> {room.type}</h1>
                   <h2 className="text-sm font-semibold text-text-muted tracking-wide"></h2>
                   <p className={"text-text-muted leading-relaxed"}>
                       {room.description}
                   </p>
                   <h3 className="text-xl font-black pt-2 text-primary">Price <small>Per Night:</small> {basePrice}</h3>
                   <NavLink
                       to={`/rooms/${room.id}`}
                       className={"w-full rounded-xl bg-primary px-4 py-3 text-center font-black text-primary-text shadow-lg shadow-cyan-900/10 transition hover:bg-primary-hover"}
                   >
                       See Room
                   </NavLink>
               </div>
           </div>
    );
}
export default CardItem;
