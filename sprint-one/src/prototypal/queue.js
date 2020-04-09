var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.i = 0;
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.i] = value;
    this.i ++;
  },
  dequeue: function() {
    var dqResult = this.storage['0'];
    delete this.storage['0'];
    if (this.i > 0) {
      this.i--;
    }
    for (key in this.storage) {
      var newKey = parseInt(key) - 1;
      var oldKey = key;
      this.storage[newKey] = this.storage[oldKey];
    }
    return dqResult;
  },
  size: function() {
    return this.i;
  }
};