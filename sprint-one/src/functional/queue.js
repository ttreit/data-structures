//Notes for future reference/refactoring:
// Would be better to use a variable to hold current number and increment that rather than using zero as always the first in line. Could get rid of the loop this way because you wouldn't have to decrement anything. So first value ever would get property of 0. No other value ever would get that property. Delete zero when leaves queue and go to next number. Keep assigning new numbers to new items in queue.

var Queue = function() {

  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  var storage = someInstance.storage;
  var i = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[i] = value;
    i ++;
  };

  someInstance.dequeue = function() {
    var result = storage['0'];
    delete storage['0'];
    if (i > 0) {
      i--;
    }
    for (var key in storage) {
      var newKey = parseInt(key) - 1;
      var oldKey = key; //for readability
      storage[newKey] = storage[oldKey];
      delete storage[oldKey];
    }
    return result;
  };

  someInstance.size = function() {
    return i;
  };

  return someInstance;
};

//Pseudocode

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

