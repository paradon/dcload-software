const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

export const listSerialports = () => {
  console.log('List Serial Ports');
  ipcRenderer.send('serialDriver', { type: 'listSerialports' });
  return { type: 'listSerialports_PENDING' };
};
