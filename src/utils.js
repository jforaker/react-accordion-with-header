
export const getHorizontalAlignment = (str) => {
  let align = {
    'left': 'flex-start',
    'right': 'flex-end',
    'center': 'center',
    'centerSpaceAround': 'space-around',
    'centerSpaceBetween': 'space-between',
    'default': 'flex-start'
  };
  return align[str] || align['default'];
};

export const getVerticalAlignment = (str) => {
  let align = {
    'bottom': 'baseline',
    'top': 'flex-start',
    'center': 'center',
    'default': 'center'
  };
  return align[str] || align['default'];
};
