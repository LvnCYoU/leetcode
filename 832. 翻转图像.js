/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  return image.map(item => {
      return item.reverse().map(child => child ? 0 : 1)
  })
};