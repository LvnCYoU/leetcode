var evenOddBit = function(n) {
  let res = [0,0];
  let i = 0;
  while(n > 0){
    res[i] += n & 1;
    i ^= 1;
    n >>= 1;
  }
  return res;
};

evenOddBit(50)