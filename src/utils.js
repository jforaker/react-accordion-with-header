export const getHorizontalAlignment = (str) => {
  const align = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
    centerSpaceAround: 'space-around',
    spaceAround: 'space-around', // dupe
    centerSpaceBetween: 'space-between',
    spaceBetween: 'space-between', // dupe
    spaceEvenly: 'space-evenly',
    stretch: 'stretch',
    default: 'flex-start',
  };
  return align[str] || align['default'];
};

export const getVerticalAlignment = (str) => {
  const align = {
    bottom: 'flex-end',
    top: 'flex-start',
    center: 'center',
    default: 'center',
  };
  return align[str] || align['default'];
};
