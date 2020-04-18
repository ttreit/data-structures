

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this.count = 0;
  // this.maxSize = Math.floor(this.limit * 0.75);
  // if (this.count > this.maxSize) {
  //   this.count = 0;
  //   this.storage.each(callback);
  // }
  // var callback = function(item, index, storage) {
  //   //get item
  //   //delete item from previous location
  //   //re-hash item and put back in storage


  // };
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  this.count += 1;
  this._storage.set(index, value);

};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(key) {
  debugger;
  var index = getIndexBelowMaxForKey(key, this._limit);
  var toDelete = this.storage.get(index);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


