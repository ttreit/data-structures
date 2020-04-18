var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // time complexity: O(1)
  list.addToTail = function(value) {
    // create node(value)
    var node = Node(value);
    // if list empty
    if (list.head === null && list.tail === null) {
      //point head to new node
      list.head = node;
      //point tail to new node
      list.tail = node;
    } else {
      // update current list.tail's next property to point to new node
      list.tail.next = node;
      // update tail to point to new node
      list.tail = node;
    }
  };

  // time complexity: O(1)
  list.removeHead = function() {
    // get value at head
    var headValue = list.head.value;
    // point head to next node
    // var tempHead = list.head;
    list.head = list.head.next;
    // delete tempHead;
    // return value

    return headValue;
  };

  // time complexity: O(n)
  list.contains = function(target) {
    if (list.head.value === target || list.tail.value === target) {
      return true;
    }

    // Iterate through list
    var findTarget = function(node, target) {
      // check if only single node in list
      if (node === null) {
        return false;
      }

      if (node.next === null) {
        // base case: no more nodes
        return false;
      } else {
        // more nodes
        if (node.value === target) {
          return true;
        } else {
          findTarget(node.next, target);
        }
      }
    };

    var result = findTarget(list.head.next, target);

    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
