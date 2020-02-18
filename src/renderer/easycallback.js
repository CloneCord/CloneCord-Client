import Swal from "sweetalert2"

function easycallback(callback) {
    return function (e, d, r) {
        if (e && r.serverError === true) {
            console.log(e);
            console.log(r);
            console.log(d);
            Swal.fire({
                title: "Error",
                heightAuto: false,
                text: "An error has occured" + e.toString(),
            });
        } else {
            callback(d, r);
        }
    }
}

function easycall(api, data, callback) {
    if (data === undefined) {
        return api(easycallback(callback));
    }
    return api(data, easycallback(callback));
}

export default easycallback;
export {easycall};
