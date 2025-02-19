var cancellable = function(fn, args, t) {
  let timer = null;
  timer = setTimeout(() => {
    fn.apply(null, args);
  }, t);
  return () => clearTimeout(timer);
};