/**
 * Rounds two numbers and returns their sum.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} - Sum of the rounded numbers.
 */

function calculateNumber(a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  return roundedA + roundedB;
}

module.exports = calculateNumber;
