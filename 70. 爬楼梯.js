var climbStairs = function(n) {
  let p = q = 0,r = 1;
  for(let i = 0; i < n; i++){
      p = q;
      q = r;
      r = p + q;
  }
  return r
};