import axios from "axios";
import {apiBaseUrl} from "./apiBase.js";
import loggingUtility from "./loggingUtility.js";
import {createClientTraceId, normalizeApiError} from "./errorUtils.js";


export async function PostBookingReq(bookingRequest) {
    const MODULE = "BookingAPI.createBooking";
    const clientTraceId = createClientTraceId();

    try {
        const RoomId = bookingRequest.RoomId;
        const url = `${apiBaseUrl}/api/rooms/${RoomId}/bookings`;

        loggingUtility.info(MODULE, `Sending booking request for room id ${RoomId}`);
        loggingUtility.request(MODULE, {
            url,
            payload: bookingRequest,
        });

        const response = await axios.post(url, bookingRequest, {
            headers: {
                "X-Client-Trace-Id": clientTraceId,
            },
        });

        loggingUtility.success(MODULE, response.data);
        return response;
    }
    catch (error)
    {
        const normalizedError = normalizeApiError(error, getAxiosErrorMessage(error), clientTraceId);

        loggingUtility.serverError(
            MODULE,
            error.response?.status ?? "NO_RESPONSE",
            normalizedError
        );
        throw normalizedError;
    }
}
export async function PostCustomerData(customerData) {
    const MODULE = "BookingAPI.postCustomerData";
    const clientTraceId = createClientTraceId();

    try {
        const url = `${apiBaseUrl}/api/customer/id`;

        loggingUtility.info(MODULE, `Sending customer data ${customerData} to fetch id`);
        loggingUtility.request(MODULE, {
            url,
            payload: customerData,
        });

        const response = await axios.post(url, customerData, {
            headers: {
                "X-Client-Trace-Id": clientTraceId,
            },
        });

        loggingUtility.success(MODULE, response.data);
        return response;
    }
    catch (error)
    {
        const normalizedError = normalizeApiError(error, getAxiosErrorMessage(error), clientTraceId);

        loggingUtility.serverError(
            MODULE,
            error.response?.status ?? "NO_RESPONSE",
            normalizedError
        );
        throw normalizedError;
    }
}

export async function Login(userAccount) {
    const MODULE = "BookingAPI.login";
    const clientTraceId = createClientTraceId();


    try {
        const url = `${apiBaseUrl}/api/user/login?useCookies=true`;

        loggingUtility.info(MODULE, `Sending user account ${userAccount.email} to login`);
        loggingUtility.request(MODULE, {
            url,
            payload: userAccount,
        });

        const response = await axios.post(url, userAccount, {
            headers: {
                "X-Client-Trace-Id": clientTraceId,
            },
            withCredentials: true,
        });

        loggingUtility.success(MODULE, response.data);
        return response;
    }
    catch (error)
    {
        const normalizedError = normalizeApiError(error, getAxiosErrorMessage(error), clientTraceId);

        loggingUtility.serverError(
            MODULE,
            error.response?.status ?? "NO_RESPONSE",
            normalizedError
        );
        throw normalizedError;
    }

}

function getAxiosErrorMessage(error) {
    if (error.response) {
        return `Status ${error.response.status}`;
    }

    if (error.request) {
        return "No response received from backend server";
    }

    return error.message;
}
