
const {app, BrowserWindow, ipcMain} = require("electron");

let mainWindow;

function createWindow(){

    mainWindow = new BrowserWindow({
        width: 900,
        height:600,
        webPreferences:{
            nodeIntegration: true
        },
        icon:__dirname+'/img/CloneCordAppIcon.png'
    });
    mainWindow.loadFile(__dirname+"/html/register.html");
    mainWindow.on('closed', function(){
        app.exit();
    });
}

app.whenReady().then(createWindow);

let onlineStatusWindow

app.whenReady().then(() => {
  onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false, webPreferences: { nodeIntegration: true } })
  onlineStatusWindow.loadURL(__dirname+"/html/online-status.html")
})

ipcMain.on('online-status-changed', (event, status) => {
  console.log(status)
})