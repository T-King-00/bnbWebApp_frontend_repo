
const isDev = import.meta.env.MODE === "development";

function timeStamp() {
    return new Date().toISOString();
}
function format(module){
    return `[${timeStamp()}] [${module}] `;
}


const logger={
    request:(module,payload)=>
        isDev && console.log(`📤 ${format(module)}: REQUEST → ${payload}`),
    success:(module,data)=>
        isDev && console.log(`✅ ${format(module)}: SUCCESS → ${data}`),
    info: (module, message) =>
        isDev && console.log(`ℹ️ ${format(module)} INFO → ${message}`),

    serverError: (module, status, error) =>
        isDev && console.warn(`⚠️ ${format(module)} SERVER_ERROR ${status} →`, error),
    networkError: (module, error) =>
        isDev && console.error(`❌ ${format(module)} NETWORK_ERROR →`, error),

}
export default logger;