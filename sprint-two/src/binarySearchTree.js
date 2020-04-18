var BinarySearchTree = function(value) {
  let bsTree = {};
  bsTree.left = null; // a binary search tree (BST) where all values are lower than the current value.
  bsTree.right = null; // a BST where all values are higher than the current value.
  bsTree.value = value;
  _.extend(bsTree, bsTreeMethods);
  return bsTree;
};

var bsTreeMethods = {
  insert: function(value) { // accepts a value and places it in the tree in the correct position.
    let node = BinarySearchTree(value);
    let recurseTree = function(nodeCalled, nodeToAdd) {
      if (nodeCalled.value > nodeToAdd.value) {
        if (nodeCalled.left === null) {
          nodeCalled.left = nodeToAdd;
        } else {
          recurseTree(nodeCalled.left, nodeToAdd);
        }
      } else {
        nodeCalled.right === null ? nodeCalled.right = nodeToAdd : recurseTree(nodeCalled.right, nodeToAdd);
      }
    };
    recurseTree(this, node);
  },

  contains: function(value) { // accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
    let result = false;

    let searchTree = function(node, value) {
      if (node.value === value) {
        return true;
      } else if (node.value > value) {
        if (node.left !== null) {
          return searchTree(node.left, value);
        } else {
          return false;
        }
      } else {
        if (node.right !== null) {
          return searchTree(node.right, value);
        } else {
          return false;
        }
      }
    };

    result = searchTree(this, value);
    return result;
  },

  depthFirstLog: function(callback) { // accepts a callback and executes it on every value contained in the tree.

    let getNodes = function(node) {
      callback(node.value);
      if (node.left !== null) {
        getNodes(node.left);
      }
      if (node.right !== null) {
        getNodes(node.right);
      }
    };
    getNodes(this);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
