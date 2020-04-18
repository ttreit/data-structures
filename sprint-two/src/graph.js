

// Instantiate a new graph

var Graph = function() {
  // create object to track nodes
  this.object = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
// add value as key to Graph object and value associated with that key is empty array
  this.object[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.object.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // remove references from nodes it has edges with
  let edges = Object.keys(this.object[node]);
  for (let key of edges) {
    delete this.object[key][node];
  }
  //delete node
  delete this.object[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.object[fromNode].hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.object[fromNode][toNode] = null;
  this.object[toNode][fromNode] = null;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.object[fromNode][toNode];
  delete this.object[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  let nodes = Object.keys(this.object);
  nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


