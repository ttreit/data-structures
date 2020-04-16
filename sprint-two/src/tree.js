var Tree = function(value) {
  var node = {};
  node.value = value;
  node.children = [];
  _.extend(node, treeMethods);
  return node;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childNode = Tree(value);
  this.children.push(childNode);
};

treeMethods.contains = function(target) {
  var findTarget = function(children, target) {
    //base case
    if (children.length === 0) {
      return false;
    }
    //recursive
    for (var i = 0; i < children.length; i++) {
      if (children[i].value === target) {
        return true;
      } else {
        var findTargetResult = findTarget(children[i].children, target);
        if (findTargetResult) {
          return findTargetResult;
        }
      }
    }
    return false;
  };

  if (this.value === target) {
    return true;
  } else {
    return findTarget(this.children, target);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
