import axios from "axios";
import {apiBaseUrl} from "./apiBase.js";
import {string} from "yup";


export async function GetRoomDetails(idAsInt) {
    try {
        console.log("Fetching room details from backend server...");
        const response = await axios.get(`${apiBaseUrl}/rooms/${idAsInt}`);

        return response.data;
    }
    catch (error)
    {
        console.error("Failed to fetch room details from backend server: ", error.response.status);
        return [];
    }
}
export async function GetAllRooms() {
    try {
        console.log("Fetching room listings from backend server...");
        const response = await axios.get(`${apiBaseUrl}/allRooms`);
        
        return response.data;
    }
    catch (error)
    {
        console.error("Failed to fetch room listings from backend server: ", error.response.status);
        return [];  
    }
}


export async function GetAvailableRoomsWithinSpecificDataes(checkInDateObj, checkOutDateObj) {
    try {
        console.log("Fetching room listings available  WithinSpecificDataes from backend server...");


        const response = await axios.get(`${apiBaseUrl}/rooms?checkInDate=${checkInDateObj}&checkOutDate=${checkOutDateObj}`);

        return response.data;
    }
    catch (error)
    {
        console.error("Failed to fetch room listings from backend server: ", error.response.status);
        return [];
    }
}