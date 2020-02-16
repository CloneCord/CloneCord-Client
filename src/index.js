
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

function startApp(){
    createWindow();
    const menu = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(menu)
}

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 1280,
        height:720,
        webPreferences:{
            nodeIntegration: true
        },
        backgroundColor : " #282B33",
        icon:__dirname+'/img/CloneCordAppIcon.png',
    });
    mainWindow.loadFile(__dirname+"/html/register.html");
    mainWindow.on('closed', function(){
        app.exit();
    });
}

app.whenReady().then(startApp);
app.commandLine.appendSwitch('disable-backgrounding-occluded-windows', 'true')
app.commandLine.appendSwitch('remote-debugging-port', '9222')

let onlineStatusWindow

app.whenReady().then(() => {
  onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false, webPreferences: { nodeIntegration: true } })
  onlineStatusWindow.loadURL(__dirname+"/html/online-status.html")
})

ipcMain.on('online-status-changed', (event, status) => {
  console.log(status)
})