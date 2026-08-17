import "./SearchBar.css"
import {useDateStore} from "../../Page/Rooms/Rooms.jsx";
import {create} from "zustand";
import {useMemo, useState} from "react";


export const useNoOfGuestsStore=create((set) => ({
    noOfGuests: 1,
    setNoOfGuests: (noOfGuests) => set({noOfGuests:noOfGuests }),
}))

function SearchBar({onSearch}) {

    const setCheckInDate=useDateStore((state) => state.setCheckInDate);
    const setCheckOutDate =useDateStore((state) => state.setCheckOutDate);
    const {checkInDate, checkOutDate} = useDateStore(state => state);
    const setNoOfGuests=useNoOfGuestsStore((state) => state.setNoOfGuests);
    const noOfGuests=useNoOfGuestsStore((state) => state.noOfGuests);
    const [hasSearchChanged, setHasSearchChanged] = useState(false);

    //simple calculated values dont need memo
    const guestsCount =   Number(noOfGuests);

    const hasValidSearchValues = Boolean(checkInDate && checkOutDate && guestsCount > 0);
    const isSearchActive =(hasSearchChanged && hasValidSearchValues)

    //event handlers for input date fields and number of guests.
    const handleCheckInDateChange =(event)=>{
        setCheckInDate(event.target.value);
        setHasSearchChanged(true);
    };
    const handleCheckOutDateChange = (event) => {
        setCheckOutDate(event.target.value);
        setHasSearchChanged(true);
    };
    const handleGuestsChange = (event) => {
        setNoOfGuests(Number(event.target.value));
        setHasSearchChanged(true);
    };

    const handleSearchClick = () => {
        if (!isSearchActive) {
            return;
        }

        onSearch(checkInDate, checkOutDate,guestsCount);
        setHasSearchChanged(false);
    };

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
                        value={checkInDate}
                           onChange={handleCheckInDateChange}/>

                </div>
                <div className={"item-container "}>
                    <label htmlFor="checkOutDate" className="text-sm font-black text-text">
                        Check-out
                    </label>
                    <input className={"input-field p-2 rounded-2xl border border-border bg-surface-soft text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-focus-ring"}
                           id={"checkOutDate"} 
                           type={"date"}
                           value={checkOutDate}
                           onChange={handleCheckOutDateChange}/>
                </div>
                <div className={"item-container "}>
                    <label className="text-sm font-black text-text">Number of Guests</label>
                    <input className={"input-field p-2 rounded-2xl border border-border " +
                           "bg-surface-soft text-text outline-none transition" +
                           " focus:border-primary focus:ring-2 focus:ring-focus-ring"}
                           type={"number"}
                           min="1"
                           value={noOfGuests}
                           onChange={handleGuestsChange}/>
                </div>
                <div className={"item-container "}>
                    <button
                        type="button"
                        disabled={!isSearchActive}
                        className={
                            isSearchActive
                                ? "rounded-2xl border border-primary bg-primary px-5 py-2 font-bold text-primary-text shadow-sm transition-colors duration-200 hover:border-primary-hover hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-focus-ring"
                                : "cursor-not-allowed rounded-2xl border border-border bg-surface-soft px-5 py-2 font-bold text-text-muted opacity-70"
                        }
                        onClick={handleSearchClick}
                    >
                        Search
                    </button>
                </div>
                <div className={"item-container rounded-2xl bg-surface-soft text-sm font-bold text-text-muted"}>

                </div>
            </div>
        </>
    );
}

export default SearchBar;
