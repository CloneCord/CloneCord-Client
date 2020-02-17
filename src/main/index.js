
const {app, BrowserWindow, ipcMain, Menu} = require("electron");

let mainWindow;

const mainMenuTemplate =  [
  {
    label: 'File',
    submenu:[
      {
        label: 'Quitter',
        accelerator:process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  },
  {
      label: 'Développement',
      submenu:[
        {
          role: 'toggleDevTools'
        }
      ]
  }
];

import * as path from 'path'
import { format as formatUrl } from 'url'

const isDevelopment = process.env.NODE_ENV !== 'production'

function startApp(){
    createWindow();
    const menu = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(menu)
}

function createWindow(){
    let window = new BrowserWindow({
        width: 1280,
        height:720,
        webPreferences:{
            nodeIntegration: true
        },
        backgroundColor : " #282B33",
        icon:__dirname+'/img/CloneCordAppIcon.png',
    });
    if (isDevelopment) {
        window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
    }
    else {
        window.loadURL(formatUrl({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes: true
        }))
    }
    window.on('closed', function(){
        app.exit();
    });
    return window;
}

app.whenReady().then(() => {
    mainWindow = createWindow();
});

let onlineStatusWindow

// app.whenReady().then(() => {
//   onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false, webPreferences: { nodeIntegration: true } })
//   onlineStatusWindow.loadURL(__dirname+"/html/online-status.html")
// })
//
// ipcMain.on('online-status-changed', (event, status) => {
//   console.log(status)
// })