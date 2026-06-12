import axios from "axios";
import {apiBaseUrl} from "./apiBase.js";

export async function GetAvailableRooms() {
    try {
        const response = await axios.get(`${apiBaseUrl}/rooms`);
        
        return response.data;
    }
    catch (error)
    {
        console.error("Failed to fetch room listings from backend server: ", error.response.status);
        return [];  
    }
}
