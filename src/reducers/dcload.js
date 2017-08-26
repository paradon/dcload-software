export default (state = { load: false }, payload) => {
  switch (payload.type) {
    case 'loadon':
      return { ...state, load: true };
    case 'loadoff':
      return { ...state, load: false };
    default:
      return state;
  }
};
