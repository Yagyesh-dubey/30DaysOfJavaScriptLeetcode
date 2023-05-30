Function.prototype.callPolyfill = function(context, ...args) {
  const boundFn = this.bind(context);
  return boundFn(...args);
};
