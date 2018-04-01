import SerialPort from 'serialport';

class SerialDriver {
  constructor() {
    this.portName = '';
    this.serialPort = null;
  }

  static enumerate() {
    return new Promise((resolve, reject) => {
      SerialPort.list((err, ports) => {
        if (err) {
          reject(err);
          return;
        }
        const portNames = ports.map(x => x.comName);
        resolve(portNames);
      });
    });
  }
}

export default SerialDriver;
