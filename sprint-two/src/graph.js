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
/*Graph.prototype.removeNode_v1 = function(node) {




};*/

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
  fromNode = fromNode.toString();// NEW CODE
  toNode = toNode.toString(); // NEW CODE


  var index;
   // get edges of fromNode
  var fromEdge = this.storage[fromNode]; // returns array of edges from fromNode
  index = fromEdge.indexOf(toNode);
  delete fromEdge[index];
  // get edges of toNode

  var toEdge = this.storage[toNode]; // returns array
  index = toEdge.indexOf(fromNode);
  delete toEdge[index];

};


// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode_v1 = function(cb) {



};

// graphA.value = 100;
// graphA.graphB = true;
// graphB.graphA = true;

/*
 * Complexity: What is the time complexity of the above functions?
 */




 /// -------- WORK SPACE forEach-------- ///

Graph.prototype.forEachNode = function(cb) {


  for (var key in this.storage){
    // temp = this.storage[key]; // save the value at key
    // delete this.storage[key]; // delete the key/value
    cb(key);// execute cb
    // newKey = newKey.stringify(); //make a string
    // this.storage[newKey] = temp// hope like hell the the new key doesn't overide another!

  }


};





 /// -------- WORK SPACE for  removeEdge-------- ///


 Graph.prototype.removeEdge_v2 = function(fromNode, toNode) {

  if (!this.hasEdge(fromNode, toNode)){
    console.warn("edges not present");
    return;
  };


  var index;
   // get edges of fromNode
  var fromEdge = this.storage[fromNode]; // returns array of edges from fromNode
  console.log("array of from edge", fromEdge);


  index = fromEdge.indexOf(toNode.toString());
  console.log("index", index); // index = -1

  delete fromEdge[index];
  // get edges of toNode

  var toEdge = this.storage[toNode]; // returns array
  index = toEdge.indexOf(fromNode.toString());
  delete toEdge[index];

};

/*var g = new Graph();
g.addNode(4);
g.addNode(5);
g.addEdge(4,5);
console.log(g.hasEdge(4,5));

console.log(g);
*/












 /// -------- WORK SPACE for  removeNode-------- ///


 Graph.prototype.removeNode = function(targetNode) {

  // make targetNode a string
  targetNode = targetNode.toString();

  // delete node
  delete this.storage[targetNode]


  // delete connections

    // iterate through Graph
    for (var key in this.storage){
      // if a connection exists

      if (this.storage[key].indexOf(targetNode) !== -1) {
        delete this.storage[key][this.storage[key].indexOf(targetNode)]
      } //

    }


}
      // check every other node for connection to targetNode

      // if encountered, delete

/*var g = new Graph();
g.addNode(4);
g.addNode(5);
g.addEdge(4,5);
console.log(g.hasEdge(4,5));

console.log(g);
*/
