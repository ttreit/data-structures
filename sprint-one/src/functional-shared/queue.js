var Queue = function() {
  var queue = {};
  queue.storage = {};
  queue.i = 0;
  // get methods into constructor
  for (key in queueMethods) {
    queue[key] = queueMethods[key];
  }

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.i] = value;
    this.i ++;
  },
  dequeue: function() {
    var dqValue = this.storage['0'];
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
    return dqValue;
  },
  size: function() {
    return this.i;
  }
};


// pseudocode
// create an empty storage object

// set i = 0

// ## enqueue (string)
// push k/v pair (i: string) into storage object

// increment i

// ## dequeue()
// return value with key '0' (create seperate function for this)

// delete k/v pair at key i

// decrement i

// derement all keys

// ## size()
// return i

//***SCRAPS***
