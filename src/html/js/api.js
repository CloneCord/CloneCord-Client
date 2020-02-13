
const server = "http://localhost:8080";

const headers_ref = {"Accept" : "application/json", "Content-Type": "application/json"};

function post(endpoint, data,auth, callback, errorCallback){
    make_request(endpoint,data,auth,"POST",callback,errorCallback);
}

function get(endpoint,auth, callback, errorCallback){
    make_request(endpoint,undefined,auth,"GET",callback,errorCallback);
}

function make_request(endpoint, data,authToken,method, callback, errorCallback){
    let headers = {};
    Object.assign(headers_ref,headers);
    if (authToken !== undefined){
        headers["Authorization"] = "Bearer " + authToken;
    }
    let ajaxData = {
        headers: JSON.stringify(headers),
        'type' : method,
        'url' : server + endpoint,
        'success' : callback
    };
    if(data !== undefined){
        ajaxData['data'] = JSON.stringify(data);
    }
    if(errorCallback !== undefined){
        ajaxData['error'] = errorCallback;
    }
    $.ajax(ajaxData);
}

//real stuff

class Auth{
    static prefix = "/auth";

    static register(email, password){
        return new Promise(function (resolve) {
            post(Auth.prefix + "/register",{email: email, password : password},function (data,statustext,xhr){
                resolve(xhr.status === 200);
            },function(){
                resolve(false);
            });
        })
    }


}