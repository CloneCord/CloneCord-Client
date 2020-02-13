
const {app, BrowserWindow} = require("electron");


function createWindow(){

    let win = new BrowserWindow({
        width: 900,
        height:600,
        webPreferences:{
            nodeIntegration: true
        }
    });
    win.loadFile("src/html/register.html");
}

app.whenReady().then(createWindow);


