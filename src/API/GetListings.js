import axios from "axios";
import {apiBaseUrl} from "./apiBase.js";

export async function GetListings() {
    try {
        const response = await axios.get(`${apiBaseUrl}/Property`);
        console.log(response.data);
        return response.data;
    }
    catch (error)
    {
        console.log(error);
        return [];  
    }
}
