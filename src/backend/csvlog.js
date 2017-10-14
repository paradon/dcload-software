import { dialog } from 'electron';

class CsvLog {
  constructor(ipc) {
    // Expects an object with methods .on(callback) and .send(action)
    this.ipc = ipc;
    this.ipc.on(payload => this.ipcHandler(payload));
  }

  ipcHandler(action) {
    console.log(action);
    switch (action.type) {
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
              this.ipc.send({ type: 'cancelSaveDialog' });
            } else {
              console.log(filename);
              this.ipc.send({ type: 'setLogfile', logfile: filename });
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
  }
}

export default CsvLog;
