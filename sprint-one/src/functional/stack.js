var Stack = function() {
  var someInstance = {};
  var i = 0;

  // Use an object with numeric keys to store values
  someInstance.storage = {}; //allows access to storage from maker function
  var storage = someInstance.storage; //readibility in later code


  // Implement the methods below
  someInstance.push = function(value) {
    storage[i] = value;
    i++;
  };

  someInstance.pop = function() {
    if (i >0) {
      i--;
    }
    var result = storage[i];
    delete storage[i];
    return result;
  };

  someInstance.size = function() {
    return i;
  };

  return someInstance;
};

//Pseudocode

// set i = 0

// declare stoarge object

// ## push(string)
// add {i: string} to storage object

// increment i

// ## pop()
// decrement i

// return {i: string}

// delete (i: string)

// ## size()
// return i
