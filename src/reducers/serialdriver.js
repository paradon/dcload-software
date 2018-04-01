export default (state = {
  ports: [],
  isLoading: false,
}, payload) => {
  switch (payload.type) {
    case 'listSerialports_PENDING':
      return { ...state, isLoading: true };
    case 'listSerialports_FULFILLED':
      return { ...state, isLoading: false, ports: payload.ports };
    case 'listSerialports_REJECTED':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export const getSerialportLoadingState = state => state.isLoading;
export const getSerialportList = state => state.ports;
