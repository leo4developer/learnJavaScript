function _new(constructor, params) {
  const obj = {};
  obj.prototype = constructor.prototype;
  this = obj;
  constructor.call(this, ...params);
}