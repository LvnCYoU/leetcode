// 正则写法
var detectCapitalUse = function(word) {
  return /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]+$)/.test(word)
};

//非正则
var detectCapitalUse = function(word) {
  return word.length == 0 || word == word.toUpperCase() || word == word.toLowerCase() || word[0] == word[0].toUpperCase() && word.slice(1) == word.slice(1).toLowerCase();
};