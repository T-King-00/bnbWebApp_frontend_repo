import "./SearchBar.css"
import {create} from "zustand";

const useDateStore = create((set) => ({
    checkInDate: "checkInDate",
    checkOutDate: "checkOutDate",
    setCheckInDate: (date) => set({checkInDate: date}),
    setCheckOutDate: (date) => set({checkOutDate: date}),
}))

function SearchBar() {
    
    const checkInDate = useDateStore((state) => state.checkInDate);
    const checkOutDate = useDateStore((state) => state.checkOutDate);
    const setCheckInDate = useDateStore((state) => state.setCheckInDate);
    const setCheckOutDate = useDateStore((state) => state.setCheckOutDate);
    
    return (
        
        <>
            <div className={"flex flex-col  xl:flex-row sm:flex-row justify-center items-center " +
                " bg-gray-200 p-2 m-2 rounded-2xl"}>
                <div className={"item-container "}>
                    <label htmlFor="checkInDate" className="text-sm font-medium">
                        Check in
                    </label>        
                    <input className={"input-field border-2 border-gray-500 rounded-2xl p-1"}
                           id={"checkInDate"} 
                           type={"date"}
                           placeholder={"Check-in"}
                           value={checkInDate}
                           onChange={(e) => setCheckInDate(e.target.value)}/>
                </div>
                <div className={"item-container "}>
                    <label htmlFor="checkInDate" className="text-sm font-medium">
                        Check-out
                    </label>
                    <input className={"input-field border-2 border-gray-500 rounded-2xl p-1"} 
                           id={"checkOutDate"} 
                           type={"date"}
                           onChange={(e) => setCheckOutDate(e.target.value)}/>
                </div>
                <div className={"item-container "}>
                    <label>Number of persons</label>
                    <input className={"input-field border-2 border-gray-500 rounded-2xl p-1"}
                           type={"number"}/>
                </div>
                <div className={"item-container "}>
                    <p>Check-in: {checkInDate }</p>
                    <p>Check-out: {checkOutDate }</p>
                </div>
            </div>
        </>
    );
}

export default SearchBar;
