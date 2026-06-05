import "./bookingList.css"
import CardItem from "../components/CardItem/CardItem.jsx";


function BookingList({data = []}) {

    const items = Array.isArray(data) ? data : [];

    return(
        <div className={"Booking-list-container grid grid-cols-1 gap-1 lg:grid-cols-2 bg-gray-500 align-middle"}>
            {
                items.map(item =>
                    <CardItem key={item.id} data={item}/>
                )
            }
           
        </div>
    )
}

export default BookingList;

/*
<ul>
                
                {
                    Items.map(item =>
                    <li><CardItem data={item}/>
                    </li>
                    
                )}
            </ul>
            
 */
