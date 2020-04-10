var Queue = function() {
  this.storage = {};
  this.i = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.i] = value;
  this.i++;
};

Queue.prototype.dequeue = function() {
  var dqResult = this.storage['0'];
  delete this.storage['0'];
  if (this.i > 0) {
    this.i--;
  }
  for (key in this.storage) {
    var newKey = parseInt(key) - 1;
    var oldKey = key;
    this.storage[newKey] = this.storage[oldKey];
    delete this.storage[oldKey];
  }
  return dqResult;
};

Queue.prototype.size = function() {
  return this.i;
};