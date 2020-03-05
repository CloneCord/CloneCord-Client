import {init} from '@sentry/electron/dist/main'
import * as path from 'path'
import {format as formatUrl} from 'url'

const {app, BrowserWindow, ipcMain, Menu} = require("electron");


let mainWindow;

const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quitter',
                accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'Développement',
        submenu: [
            {
                role: 'toggleDevTools'
            }
        ]
    }
];

const isDevelopment = process.env.NODE_ENV !== 'production';

if (!isDevelopment) {
    init({
        dsn: 'https://10404f40381f41b88d7990684b4c748f@sentry.io/3702718',
        release: 'clonecord-client@' + process.env.npm_package_version
    });
}

function startApp() {
    let w = createWindow();
    const menu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(menu);
    return w;
}

function createWindow() {
    let window = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        },
        backgroundColor: " #282B33",
        icon: path.join(__dirname, "build", "icon.png"),
    });
    if (isDevelopment) {
        window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
    } else {
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
    mainWindow = startApp();
});
app.commandLine.appendSwitch('disable-backgrounding-occluded-windows', 'true');
app.commandLine.appendSwitch('remote-debugging-port', '9222');

//
// let onlineStatusWindow;
//
// app.whenReady().then(() => {
//   onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false, webPreferences: { nodeIntegration: true } })
//   onlineStatusWindow.loadURL(__dirname+"/html/online-status.html")
// })
//
ipcMain.on('online-status-changed', (event, status) => {
    console.log(status)
});