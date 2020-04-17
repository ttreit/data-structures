var Tree = function(value) {
  var newTree = {};
  newTree.value = value;


  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;

  var findTarget = function(obj, target) {
    if (obj.value === target) {
      result = true;
    }
    if (obj.children.length) {
      for (var e of obj.children) {
        findTarget(e, target);
      }
    }
  };
  findTarget(this, target);

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
