var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  //implement children as an array trees

  // extend function goes here
  extend(newTree, treeMethods);

  return newTree;
};

// add extend method
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new tree
  var child = Tree();

  // set the value property of the child tree to value
  child.value = value;

  // add to the children array
  this.children.push(child);

};

treeMethods.contains = function(target) {
  var result = false;
  // base case - check if value of current tree is target
  if (this.value === target){
    result = true;
    return result;
  }

  if (this.children){
    // for each child check if child value is target
    for (var child = 0; child < this.children.length; child++){
      var childResult = false;
      childResult = this.children[child].contains(target);
      // only update result variable if child returns true
      if (childResult){
        result = childResult;
      }
    }
  }
  return result;
};


/*
dad >> child1 >> child1.child


*/


/*
 * Complexity: What is the time complexity of the above functions?
 */
