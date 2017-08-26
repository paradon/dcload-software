export const switchLoadOn = () => {
  console.log('Switching load ON');
  return {
    type: 'loadon',
  };
};

export const switchLoadOff = () => {
  console.log('Switching load OFF');
  return {
    type: 'loadoff',
  };
};
