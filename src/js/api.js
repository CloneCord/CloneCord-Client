
const server = "http://localhost:8080";


function post(endpoint, data,auth, callback, errorCallback){
    make_request(endpoint,data,auth,"POST",callback,errorCallback);
}

function get(endpoint,auth, callback, errorCallback){
    make_request(endpoint,undefined,auth,"GET",callback,errorCallback);
}

function make_request(endpoint, data,authToken,method, callback, errorCallback){
    let headers = {"Accept" : "application/json", "Content-Type": "application/json"};
    if (authToken !== undefined){
        headers["Authorization"] = "Bearer " + authToken;
    }
    let ajaxData = {
        headers: headers,
        method : method,
        url : server + endpoint,
        success : callback
    };
    if(data !== undefined){
        ajaxData.data = JSON.stringify(data);
    }
    if(errorCallback !== undefined){
        ajaxData.error = errorCallback;
    }
    $.ajax(ajaxData);
}

//real stuff

class Auth{
    static prefix = "/auth";

    static register(email, password){
        return new Promise(function (resolve) {
            post(Auth.prefix + "/register",{email: email, password : password},undefined,function (data,statustext,xhr){
                resolve(xhr.status === 200);
            },function(xhr){
                console.log(xhr.responseJSON);
                resolve(false);
            });
        })
    }
}