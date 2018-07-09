/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  var uTemp = s.toUpperCase();
  if(uTemp == s)
  {
      return true;
  }
  else{
      return false;
  }
};

module.exports = isUppercase;
