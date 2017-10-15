export default (payload, dispatch, csvLog) => {
  switch (payload.type) {
    case 'selectLogfile':
      csvLog.selectLogfile()
        .then((fn) => {
          console.log('Set', fn);
          dispatch({ type: 'setLogfile', logfile: fn });
        })
        .catch((err) => {
          console.log('Canceled', err);
          dispatch({ type: 'cancelSaveDialog' });
        });
      break;

    case 'closeLogfile':
      csvLog.closeLogfile()
        .then(() => {
          console.log('File Closed');
        });
      break;

    default:
      break;
  }
};
