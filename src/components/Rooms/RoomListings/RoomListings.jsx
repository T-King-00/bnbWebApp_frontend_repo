import "./RoomListings.css"
import CardItem from "../CardItem/CardItem.jsx";

function RoomListings({data = []}) {

    const items = Array.isArray(data) ? data : [];

    return(
        <div className={"Booking-list-container mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
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
