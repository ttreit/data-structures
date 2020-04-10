var Stack = function() {
  this.storage = {};
  this.i = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.i] = value;
  this.i++;
};

Stack.prototype.pop = function() {
  if (this.i > 0) {
    this.i--;
  }
  var popResult = this.storage[this.i];
  delete this.storage[this.i];
  return popResult;
};

Stack.prototype.size = function() {
  return this.i;
};


