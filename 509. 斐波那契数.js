var fib = function(n) {
  if(n < 2) return n
  let q = p = 0, r = 1;
  for(let i = 2; i <= n; i++){
      q = p;
      p = r;
      r = p + q;
  }
  return r
};