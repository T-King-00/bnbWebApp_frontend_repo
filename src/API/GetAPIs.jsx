import axios from "axios";
import {apiBaseUrl} from "./apiBase.js";
import loggingUtility from "./loggingUtility.js";

function getAxiosErrorMessage(error) {
    if (error.response) {
        return `Status ${error.response.status}`;
    }

    if (error.request) {
        return "No response received from backend server";
    }
    return error.message;
}
export async function GetRoomDetails(idAsInt,checkInDateObj,checkOutDateObj) {
    const MODULE = "GetAPI.GetRoomDetails";
    try {
        const url = `${apiBaseUrl}/rooms/${idAsInt}?checkInDate=${checkInDateObj}&checkOutDate=${checkOutDateObj}`;

        loggingUtility.info(MODULE, `Fetching room details from backend server for room id ${idAsInt}`);
        loggingUtility.request(MODULE, url);

        const response = await axios.get(url);

        loggingUtility.success(MODULE, response.data);
        return response.data;
    }
    catch (error)
    {
        loggingUtility.serverError(
            MODULE,
            error.response?.status ?? "NO_RESPONSE",
            error.response?.data ?? getAxiosErrorMessage(error)
        );
        return [];
    }
}
export async function GetAllRooms() {
    const MODULE = "GetAPI.GetAllRooms";
    try {
        const url = `${apiBaseUrl}/allRooms`;

        loggingUtility.info(MODULE, "Fetching room listings from backend server...");
        loggingUtility.request(MODULE, url);

        const response = await axios.get(url);

        loggingUtility.success(MODULE, response.data);
        return response.data;
    }
    catch (error)
    {
        loggingUtility.serverError(
            MODULE,
            error.response?.status ?? "NO_RESPONSE",
            error.response?.data ?? getAxiosErrorMessage(error)
        );
        return [];
    }
}
export async function GetAvailableRoomsWithFilter(checkInDateObj, checkOutDateObj, noOfGuests) {
    const MODULE = "GetAPI.GetAvailableRoomsWithFilter";
    try {
        const url = `${apiBaseUrl}/rooms?checkInDate=${checkInDateObj}&checkOutDate=${checkOutDateObj}&numberOfGuests=${noOfGuests}`;

        loggingUtility.info(
            MODULE,
            `Fetching available rooms from ${checkInDateObj} to ${checkOutDateObj}`
        );
        loggingUtility.request(MODULE, url);

        const response = await axios.get(url);

        loggingUtility.success(MODULE, response.data);
        return response.data;
    }
    catch (error)
    {
        loggingUtility.serverError(
            MODULE,
            error.response?.status ?? "NO_RESPONSE",
            error.response?.data ?? getAxiosErrorMessage(error)
        );
        return [];
    }
}
export async function GetBookings(){
    const MODULE = "GetAPI.GetBookings";
    try {
        const url = `${apiBaseUrl}/api/bookings`;

        loggingUtility.info(MODULE, "Fetching bookings from backend server");
        loggingUtility.request(MODULE, url);

        const response = await axios.get(url);

        loggingUtility.success(MODULE, response.data);
        return response.data;
    }
    catch (error)
    {
        loggingUtility.serverError(
            MODULE,
            error.response?.status ?? "NO_RESPONSE",
            error.response?.data ?? getAxiosErrorMessage(error)
        );
        return [];
    }
}
