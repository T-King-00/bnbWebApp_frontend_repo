export function createClientTraceId() {
    return crypto.randomUUID();
}

export function normalizeApiError(error, fallbackMessage, clientTraceId) {
    const responseData = error.response?.data;

    if (responseData && typeof responseData === "object") {
        return {
            ...responseData,
            traceId: responseData.traceId || responseData.TraceId || clientTraceId,
            clientTraceId,
        };
    }

    return {
        message: responseData || fallbackMessage || error.message || "Unexpected Error Occurred",
        traceId: clientTraceId,
        clientTraceId,
    };
}
