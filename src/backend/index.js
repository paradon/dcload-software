import { BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import url from 'url';

import * as Handlers from './ipcdispatch';
import CsvLog from './drivers/csvlog';

class Backend {
  constructor() {
    this.startUrl = process.env.ELECTRON_START_URL || url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true,
    });
    this.mainWindow = null;
    this.csvLog = new CsvLog();
    console.log('CsvLog', this.csvLog);
    this.registerHandler('csvLog', Handlers.csvLogHandler, this.csvLog);
  }

  createWindow() {
    // Create the browser window.
    this.mainWindow = new BrowserWindow({ width: 800, height: 600 });

    // and load the index.html of the app.

    this.mainWindow.loadURL(this.startUrl);

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    this.mainWindow.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      this.mainWindow = null;
    });
    return this.mainWindow;
  }

  dispatch(payload) {
    if (this.mainWindow !== null) {
      this.mainWindow.send('dispatch', payload);
    } else {
      console.log('mainWindow si null');
    }
  }

  registerHandler(channel, handler, ...data) {
    const boundHandler = payload => handler(payload, x => this.dispatch(x), ...data);
    ipcMain.on(channel, (event, payload) => boundHandler(payload));
  }
}

export default Backend;
