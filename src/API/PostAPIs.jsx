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

export async function PostBookingReq(bookingRequest) {
    const MODULE = "BookingAPI.createBooking";
    try {
        const url = `${apiBaseUrl}/rooms/${bookingRequest.roomId}/bookingForm`;

        loggingUtility.info(MODULE, `Sending booking request for room id ${bookingRequest.roomId}`);
        loggingUtility.request(MODULE, {
            url,
            payload: bookingRequest,
        });

        const response = await axios.post(url, bookingRequest);

        loggingUtility.success(MODULE, response.data);
        return response.data.message;
    }
    catch (error)
    {
        loggingUtility.serverError(
            MODULE,
            error.response?.status ?? "NO_RESPONSE",
            error.response?.data ?? getAxiosErrorMessage(error)
        );
        throw error;
    }
}
