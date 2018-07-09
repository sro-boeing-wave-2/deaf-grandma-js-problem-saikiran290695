/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  const uTemp = s.toUpperCase();
  let res = false;
  if (uTemp === s) {
    res = true;
  }
  return res;
};

module.exports = isUppercase;
