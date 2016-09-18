/**
 * Created by jakeforaker on 9/17/16.
 */
export const arrayify = obj => [].concat(obj);

// removes duplicate from array
export const dedupeArr = arr => arr.filter((item, index, inputArray) => {
	return inputArray.indexOf(item) === index;
});
