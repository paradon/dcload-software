const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

export const selectLogFile = () => {
  console.log('Open Save Dialog');
  ipcRenderer.send('csvLog', { type: 'selectLogfile' });
  return { type: 'selectLogfile' };
};

export const closeLogFile = () => {
  console.log('Close Log File');
  ipcRenderer.send('csvLog', { type: 'closeLogfile' });
  return false;
};
