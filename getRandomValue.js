/**
 * @fileOverview Generates random value in the Range
 */

/**
 * Gets random value in the min and max range
 * @param {number} min minValue to be included in the range
 * @param {number} max maxValue to be included in the range
 * @returns {number}
 */
const getRandomValue = (min, max) => {
  return Math.floor(Math.random()*(max - min) + min);
};

module.exports = getRandomValue;
