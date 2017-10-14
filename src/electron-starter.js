import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import path from 'path';
import url from 'url';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true,
  });
  mainWindow.loadURL(startUrl);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
ipcMain.on('csvLog', (event, payload) => {
  console.log(payload);
  switch (payload.type) {
    case 'selectLogfile':
      // open save dialog
      dialog.showSaveDialog(
//        event.sender,
        {
          title: 'CSV Log File',
          filters: [
            { name: 'Comma Seperated Values', extensions: ['csv'] },
          ],
          defaultPath: 'dcload.csv',
        },
        (filename) => {
          if (filename === undefined) {
            console.log('save dialog canceled');
            mainWindow.webContents.send('dispatch', { type: 'cancelSaveDialog' });
          } else {
            console.log(filename);
            mainWindow.webContents.send('dispatch', { type: 'setLogfile', logfile: filename });
          }
        },
      );
      break;
    case 'closeLogFile':
      // Close existing open file
      break;
    default:
      break;
  }
});
