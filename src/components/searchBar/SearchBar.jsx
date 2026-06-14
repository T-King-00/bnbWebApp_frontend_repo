import "./SearchBar.css"

import {useDateStore} from "../../Page/Rooms/Rooms.jsx";


function SearchBar({onSearch}) {

    const setCheckInDate=useDateStore((state) => state.setCheckInDate);
    const setCheckOutDate =useDateStore((state) => state.setCheckOutDate);
    const {checkInDate, checkOutDate} = useDateStore(state => state);

    return (
        
        <>
            <div className={"flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 shadow-xl shadow-slate-900/10 sm:flex-row sm:flex-wrap sm:items-end"}>
                <div className={"item-container "}>
                    <label htmlFor="checkInDate" className="text-sm font-black text-text">
                        Check in
                    </label>        
                    <input className={"input-field rounded-2xl border border-border bg-surface-soft p-2 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-focus-ring"}
                           id={"checkInDate"} 
                           type={"date"}
                           placeholder={"Check-in"}
                           onChange={(e) =>setCheckInDate(e.target.value)}/>
                </div>
                <div className={"item-container "}>
                    <label htmlFor="checkOutDate" className="text-sm font-black text-text">
                        Check-out
                    </label>
                    <input className={"input-field p-2 rounded-2xl border border-border bg-surface-soft text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-focus-ring"}
                           id={"checkOutDate"} 
                           type={"date"}
                           onChange={(e) =>setCheckOutDate(e.target.value)}/>
                </div>
                <div className={"item-container "}>
                    <label className="text-sm font-black text-text">Number of persons</label>
                    <input className={"input-field p-2 rounded-2xl border border-border " +
                        "bg-surface-soft text-text outline-none transition" +
                        " focus:border-primary focus:ring-2 focus:ring-focus-ring"}
                           type={"number"}/>
                </div>
                <div className={"item-container "}>
                    <button className={"rounded-2xl border border-primary bg-primary " +
                        "px-5 py-2 font-bold text-primary-text shadow-sm transition-colors" +
                        " duration-200 hover:border-primary-hover hover:bg-primary-hover " +
                        "focus:outline-none focus:ring-2 focus:ring-focus-ring"}
                            onClick={()=>onSearch(checkInDate,checkOutDate)}>Search</button>
                </div>
                <div className={"item-container rounded-2xl bg-surface-soft text-sm font-bold text-text-muted"}>

                </div>
            </div>
        </>
    );
}

export default SearchBar;

