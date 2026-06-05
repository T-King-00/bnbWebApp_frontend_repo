import "tailwindcss";
import "./CardItem.css"

function CardItem(props) {
    const item=props.data;
    return (
        
           <div className={`cardContainer bg-white p-4 m-1 flex flex-col md:flex-row sm:flex-row rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden`}>
               <div className={"w-full sm:w-70 md:w-80 lg:w-50 shrink-0 p-2"}>
                   <img className={"w-full w-full object-cover border border-slate-200 rounded-xl"} alt={"HotelImgPlaceHolder"} src={"https://images.trvl-media.com/lodging/16000000/15620000/15617200/15617176/248f37ce.jpg?impolicy=resizecrop&rw=1200&ra=fit"} />
               </div>
               <div className={"flex min-w-0 flex-col gap-2 p-2"}>
                   <h1 className="text-2xl font-bold text-slate-950 leading-tight">{item.name}</h1>
                   <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Location</h2>
                   <p className={"md:shrink-0 text-slate-700 leading-relaxed"}>
                       {item.description}
                   </p>
                   <h3 className="text-xl font-bold pt-2 text-emerald-700">Price</h3>
                   <a className={"bg-emerald-600 text-white p-2 rounded-lg text-center font-semibold hover:bg-emerald-700 transition-colors"} >
                       <i></i>
                       Book Now
                   </a>
               </div>
           </div>
    );
}
export default CardItem;
