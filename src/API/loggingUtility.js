const isDev = import.meta.env.MODE === "development";

function timeStamp() {
    return new Date().toISOString();
}

function format(module, traceId) {
    return `[${timeStamp()}] [${module}] [traceId: ${traceId ?? "N/A"}]`;
}

const logger = {
    request: (module, payload, traceId) =>
        isDev && console.log(`📤 ${format(module, traceId)} REQUEST →`, payload),
    success: (module, data, traceId) =>
        isDev && console.log(`✅ ${format(module, traceId)} SUCCESS →`, data),
    info: (module, message, traceId) =>
        isDev && console.log(`ℹ️ ${format(module, traceId)} INFO → ${message}`),
    serverError: (module, status, error, traceId) =>
        isDev && console.warn(`⚠️ ${format(module, traceId)} SERVER_ERROR ${status} →`, error),
    networkError: (module, error, traceId) =>
        isDev && console.error(`❌ ${format(module, traceId)} NETWORK_ERROR →`, error),
};

export default logger;
