import axios from "axios";
import {apiBaseUrl} from "./apiBase.js";
import loggingUtility from "./loggingUtility.js";
import {getServerTraceId, normalizeApiError} from "./errorUtils.js";

function getAxiosErrorMessage(error) {
    if (error.response) {
        return `Status ${error.response.status}`;
    }

    if (error.request) {
        return "No response received from backend server";
    }

    return error.message;
}

export async function DeleteBookingReq(bookingRequestId) {
    const MODULE = "BookingAPI.deleteBooking";

    try {
        const url = `${apiBaseUrl}/api/bookings/${bookingRequestId}`;

        loggingUtility.info(MODULE, `Sending a delete request for booking id ${bookingRequestId}`);
        loggingUtility.request(MODULE, {
            url
        });

        const response = await axios.delete(url);

        loggingUtility.success(MODULE, response.data, getServerTraceId(response));
        return response;
    }
    catch (error)
    {
        const normalizedError = normalizeApiError(error, getAxiosErrorMessage(error));

        loggingUtility.serverError(
            MODULE,
            error.response?.status ?? "NO_RESPONSE",
            normalizedError,
            normalizedError.traceId
        );
        throw normalizedError;
    }
}
