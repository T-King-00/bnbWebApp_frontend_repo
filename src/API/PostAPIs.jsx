import axios from "axios";
import {apiBaseUrl} from "./apiBase.js";
import loggingUtility from "./loggingUtility.js";
import {getServerTraceId, normalizeApiError} from "./errorUtils.js";


export async function PostBookingReq(bookingRequest) {
    const MODULE = "BookingAPI.createBooking";

    try {
        const RoomId = bookingRequest.RoomId;
        const url = `${apiBaseUrl}/rooms/${RoomId}/bookings`;

        loggingUtility.info(MODULE, `Sending booking request for room id ${RoomId}`);
        loggingUtility.request(MODULE, {
            url,
            payload: bookingRequest,
        });

        const response = await axios.post(url, bookingRequest, {
            withCredentials:true,
        });

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
export async function PostCustomerData(customerData) {
    const MODULE = "BookingAPI.postCustomerData";

    try {
        const url = `${apiBaseUrl}/customer/id`;
        loggingUtility.info(MODULE, `Sending customer data ${customerData} to fetch id`);
        loggingUtility.request(MODULE, {
            url,
            payload: customerData,
        });

        const response = await axios.post(url, customerData, {
            withCredentials: true,
        });


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

export async function PostChatMessage(message) {
    const MODULE = "BookingAPI.postChatMessage";

    try {
        const url = `${apiBaseUrl}/chat`;
        const payload = { message };

        loggingUtility.info(MODULE, "Sending chat message");
        loggingUtility.request(MODULE, { url });

        const response = await axios.post(url, payload, {
            withCredentials: true,
        });

        loggingUtility.success(MODULE, response.status, getServerTraceId(response));
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

export async function Login(userAccount) {
    const MODULE = "BookingAPI.login";
    try {
        const url = `${apiBaseUrl}/user/login?useCookies=true`;

        loggingUtility.info(MODULE, `Sending user account ${userAccount.email} to login`);
        loggingUtility.request(MODULE, {
            url,
            payload: userAccount,
        });

        const response = await axios.post(url, userAccount, {
            withCredentials: true,
        });


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

function getAxiosErrorMessage(error) {
    if (error.response) {
        return `Status ${error.response.status} ${error.response.data}`;
    }

    if (error.request) {
        return "No response received from backend server";
    }

    return error.message;
}
