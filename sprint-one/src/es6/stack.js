class Stack {
  constructor() {
    this.storage = {};
    this.i = 0;
  }

  push(value) {
    this.storage[this.i] = value;
    this.i++;
  }

  pop() {
    if (this.i > 0) {
      this.i--;
    }
    var popReturn = this.storage[this.i];
    delete this.storage[this.i];
    return popReturn;
  }

  size() {
    return this.i;
  }
}