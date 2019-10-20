// get all unique values
const getUniqueValues = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default getUniqueValues;
