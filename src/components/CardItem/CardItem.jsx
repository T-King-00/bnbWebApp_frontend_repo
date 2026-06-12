import "tailwindcss";
import "./CardItem.css"

function CardItem(props) {
    const room=props.data;
    return (
        
           <div className={`cardContainer bg-white p-4 m-1  items-center flex flex-col  rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden`}>
               <div className={"flex flex-auto   p-2 justify-center  items-center "}>
                   <img className={"flex-auto   object-fill  border border-slate-200 rounded-xl"} alt={"HotelImgPlaceHolder"} src={"https://images.trvl-media.com/lodging/16000000/15620000/15617200/15617176/248f37ce.jpg?impolicy=resizecrop&rw=1200&ra=fit"} />
               </div>
               <div className={"flex flex-col  items-center gap-2 p-2"}>
                   <p className={"text-slate-700 leading-relaxed"}> {room.beds[0].quantity} guests <span> . {room.size}m²</span> </p>
                   <h1 className=" text-2xl font-bold text-slate-950 leading-tight"> {room.type}</h1>
                   <h2 className="text-sm font-semibold text-slate-500  tracking-wide"></h2>
                   <p className={"text-slate-700 leading-relaxed"}>
                       {room.description}
                   </p>
                   <h3 className="text-xl font-bold pt-2 text-emerald-700">Price: {room.price.basePrice}</h3>
                   <a className={"bg-emerald-600 text-white p-2 rounded-lg text-center font-semibold hover:bg-emerald-700 transition-colors"} >
                       <i></i>
                       <button >See Rum </button>
                   </a>
               </div>
           </div>
    );
}
export default CardItem;
