/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let len = flowerbed.length
  for(let i = 0; i < len; i++){
      if(flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] != 1) && (flowerbed[i + 1] != 1 || i == len - 1)){
          flowerbed[i] = 1;
          n--
      }
  }
  return n <= 0
};