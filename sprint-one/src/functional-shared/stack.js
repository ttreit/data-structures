var Stack = function() {
  var stack = {};
  stack.storage = {};
  stack.i = 0;
  for (key in stackMethods) {
    stack[key] = stackMethods[key];
  }
  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.i] = value;
    this.i ++;
  },
  pop: function() {
    if (this.i > 0) {
      this.i --;
    }
    var popResult = this.storage[this.i];
    delete this.storage[this.i];
    return popResult;
  },
  size: function() {
    return this.i;
  }
};