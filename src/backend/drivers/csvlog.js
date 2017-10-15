import { dialog } from 'electron';

class CsvLog {
  constructor() {
    // Expects an object with methods .on(callback) and .send(action)
    this.filename = false;
  }

  selectLogfile() {
    return new Promise((resolve, reject) => {
      dialog.showSaveDialog(
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
            reject();
          } else {
            this.filename = filename;
            console.log(filename);
            resolve(filename);
          }
        },
      );
    });
  }

  closeLogfile() {
    this.filename = false;
    return Promise.resolve();
  }
}

export default CsvLog;
