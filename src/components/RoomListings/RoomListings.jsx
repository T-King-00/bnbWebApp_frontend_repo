import "./RoomListings.css"
import CardItem from "../CardItem/CardItem.jsx";

function RoomListings({data = []}) {

    const items = Array.isArray(data) ? data : [];

    return(
        <div className={"Booking-list-container grid gap-1  grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 bg-gray-500 align-middle"}>
            {
                items.map(item =>
                    <CardItem key={item.id} data={item}/>
                )
            }
        </div>
    )
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
