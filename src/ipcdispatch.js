const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

export default (dispatch) => {
  ipcRenderer.on('dispatch', (event, action) => {
    dispatch(action);
  });
};
