import axios from "axios";
import {apiBaseUrl} from "./apiBase.js";

export async function GetAvailableRooms() {
    try {
        const response = await axios.get(`${apiBaseUrl}/rooms`);
        console.log(response.data);
        return response.data;
    }
    catch (error)
    {
        console.log(error);
        return [];  
    }
}
