import SerialDriver from '../drivers/serialdriver';

export default (payload, dispatch) => {
  console.log('serialdriver: ', payload.type);
  switch (payload.type) {
    case 'listSerialports':
      SerialDriver.enumerate()
        .then((ports) => {
          console.log('Ports: ', ports);
          dispatch({ type: 'listSerialports_FULFILLED', ports });
        })
        .catch((err) => {
          console.log('Error listing ports: ', err);
          dispatch({ type: 'listSerialports_REJECTED', error: err });
        });
      break;

    default:
      break;
  }
};
