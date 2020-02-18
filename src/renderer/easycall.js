import easycallback from "./easycallback";

function easycall(apiFunction, data, callback) {
    if (data === undefined) {
        return apiFunction(easycallback(callback));
    }
    return apiFunction(data, easycallback(callback));
}

export default easycall;
