/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  return Array(n).fill(start).reduce((a, b, index) => a ^ index * 2 + start)
};