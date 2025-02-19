var cancellable = function(fn, args, t) {
  let timer = null;
  timer = setTimeout(() => {
    fn.apply(null, args);
  }, t);

  function cancel() {
    clearTimeout(timer);
  }
  return cancel
  

};