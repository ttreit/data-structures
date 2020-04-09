var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.i = 0;
  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.i] = value;
    this.i++;
  },

  pop: function() {
    if (this.i > 0) {
      this.i--;
    }
    var popValue = this.storage[this.i];
    delete this.storage[this.i];
    return popValue;
  },

  size: function() {
    return this.i;
  }
};