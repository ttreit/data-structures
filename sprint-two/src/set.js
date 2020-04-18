var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fixed!
  return set;
};

var setPrototype = {};

// takes any string and adds it to the set
setPrototype.add = function(item) {
  this._storage[item] = null;
};

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
