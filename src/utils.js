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

export const validateActive = (active, panels, firstOpen) => {
  // if props.active is defined, validate it is an array and that it is a valid instance of the panels array
  if (typeof active === 'number' || !Array.isArray(active)) {
    throw new Error('this.props.active must be an array');
  }
  if (firstOpen && Array.isArray(active)) {
    // if props.firstOpen is used along with a props.active array of "[]" then give a warning
    if (active.length === 0) {
      console.warn(
        `Shouldnt use "firstOpen" with an empty "active" array. Prefer one or the other, however we'll open the first`
      );
    }
    // if props.firstOpen is used along with a props.active array of "[1]" then give a warning
    if (active.length > 0) {
      console.warn(
        `Shouldnt use "firstOpen" with an "active" array. Prefer one or the other, however we'll open the first`
      );
    }
  }
  active.forEach((panel) => {
    if (!panels.includes(panel)) {
      throw new Error(
        `Items in props.active array do not match indexes of panel array!
            Check that one or more array indexes are properly passed in.`
      );
    }
  });
};
