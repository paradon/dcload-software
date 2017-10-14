export default (state = {
  logfile: null,
  isLogging: false,
  dialogIsOpen: false,
}, payload) => {
  switch (payload.type) {
    case 'setLogfile':
      return { ...state, logfile: payload.logfile, dialogIsOpen: false };
    case 'closeLogfile':
      return { ...state, logfile: null, dialogIsOpen: false };
    case 'startLogging':
      return { ...state, isLogging: true };
    case 'stopLogging':
      return { ...state, isLogging: false };
    case 'selectLogfile':
      return { ...state, dialogIsOpen: true };
    case 'cancelLogfileDialog':
      return { ...state, dialogIsOpen: false };
    default:
      return state;
  }
};

export const getLogfileDialogState = state => state.isDialogOpen;
export const getLogfilePath = state => state.logfile;
