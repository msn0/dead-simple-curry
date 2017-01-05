module.exports = function (fn) {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn.call(this, ...args)
      : (...rest) => curried.call(this, ...args, ...rest);
  };
};
