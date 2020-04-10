class Queue {
  constructor() {
    this.storage = {};
    this.i = 0;
  }

  enqueue(value) {
    this.storage[this.i] = value;
    this.i++;
  }

  dequeue() {
    var dqReturn = this.storage['0'];
    delete this.storage['0'];
    for (var key in this.storage) {
      var newKey = parseInt(key) - 1;
      var oldKey = key;
      this.storage[newKey] = this.storage[oldKey];
      delete this.storage[oldKey];
    }
    if (this.i > 0) {
      this.i--;
    }
    return dqReturn;
  }

  size() {
    return this.i;
  }
}
