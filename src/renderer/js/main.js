
let Authorization = "";

function getAuth(){
    if(Authorization === ""){
        return "";
    } else {
        return "Bearer " + Authorization;
    }
}