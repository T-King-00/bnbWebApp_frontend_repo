export function getServerTraceId(response) {
    return response?.data?.traceId
        || response?.data?.TraceId
        || response?.headers?.get?.("x-trace-id")
        || response?.headers?.["x-trace-id"];
}

export function normalizeApiError(error, fallbackMessage) {
    const responseData = error.response?.data;
    const traceId = getServerTraceId(error.response);

    if (responseData && typeof responseData === "object") {
        return {
            ...responseData,
            traceId,
        };
    }

    return {
        message: responseData || fallbackMessage || error.message || "Unexpected Error Occurred",
        traceId,
    };
}
