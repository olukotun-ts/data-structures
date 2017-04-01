/*
{5: [6],
6: [5],
4
}

*/
// Instantiate a new graph
var Graph = function() {
  // add storage object.
  this.storage = {};
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  // create a new node
  this.storage[value] = [];
};

// Return a boolea`n value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // convert node to String first.
  if (typeof node === 'number'){
    var node = node.toString();
  };
  return Object.keys(this.storage).includes(node);
}

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // get edges of fromNode
  var fromEdge = this.storage[fromNode]; // returns array of edges from fromNode

  // get edges of toNode
  var toEdge = this.storage[toNode]; // returns array

  // check if toNode has fromNode edge and fromNode has toNode edge
  return fromEdge.includes(toNode.toString()) && toEdge.includes(fromNode.toString());

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // add edges of fromNode
  this.storage[fromNode].push(toNode.toString());// converted to string to match the keys

  // add edges of toNode
  this.storage[toNode].push(fromNode.toString());// converted to string to match the keys


};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index;
   // get edges of fromNode
  var fromEdge = this.storage[fromNode + '']; // returns array of edges from fromNode
  index = fromEdge.indexOf(toNode + '');
  delete fromEdge[index];
  // get edges of toNode

  var toEdge = this.storage[toNode + '']; // returns array
  index = toEdge.indexOf(fromNode + '');
  delete toEdge[index];

};


// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

// graphA.value = 100;
// graphA.graphB = true;
// graphB.graphA = true;

/*
 * Complexity: What is the time complexity of the above functions?
 */
