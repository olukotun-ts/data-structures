var Tree = function(value) {
  var newTree = {};
  newTree.value = value;


  newTree.children = [];  //implement children as an array trees

  // extend function goes here

  return newTree;
};


// add extend method

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new tree
  // set the value property of the child tree to value
  // add to the children array
};

treeMethods.contains = function(target) {
  // create var to hold results
  // base case - check if value of current tree is target

  // for each child check if child value is target
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
