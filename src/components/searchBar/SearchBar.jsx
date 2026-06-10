import {useEffect, useState} from "react";


function SearchBar() {
    
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    
    function handleCheckInDateChange (e) {
        setCheckInDate(e.target.value);
    }

    useEffect(() => {
        console.log(checkInDate);
    }, );
   
    
    return (
        
        <>
            <h3>search bar </h3>
            <div className={"flex flex-row"}>
                <div>
                    <input className={""} id={"checkInDate"} type={"date"} onChange={handleCheckInDateChange}/> 
                    <input className={""} id={"checkOutDate"} type={"date"}/>
                </div>
                <div>
                    <input className={"border-2 border-gray-500 rounded-2xl p-2"} type="text" placeholder={"Search"}/>
                </div>
            </div>
        </>
    );
}

export default SearchBar;