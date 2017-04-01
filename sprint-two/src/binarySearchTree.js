var BinarySearchTree = function(value=null) {
  this.value = value;
  this.right = null;
  this.left = null;
};

BinarySearchTree.prototype.insert = function(val, node){
  var node = node || this;

  // Check to see if BST is empty.
  if (node.value === null){
    // If empty, create first BSTNode.
    node.value = val;
  } else if (val > node.value){  // Else, check to see if val > node.value
    if (node.right === null){
      node.right = new BinarySearchTree(val); // If true, node.right = newBSTNode.
    } else {  // Else check recursively.
      node.insert(val, node.right);
    }
  } else { // Check to see if val < node.value and node.left is null.
    if (node.left === null){
      node.left = new BinarySearchTree(val); // If true, node.left = newBSTNode.
    } else {  // Else check recursively.
      node.insert(val, node.left);
    }
  }
}

BinarySearchTree.prototype.contains = function(target, node){
  // Create var to hold result.
  var result = false;
  var node = node || this;

  // Base case: Return truth of this value === target.
  if (node.value === target){
    result = true;
  };

  // Iterative case.
  // If target > this.value,
  if (target > node.value){
    // If this.right exists, check it.
    if (node.right !== null){
      var childResult = node.contains(target, node.right);
      // Only override result if result is true.
      if (childResult){
        result = childResult;
      }
    }
  } else if (target < node.value){
    // Using 'else if' to avoid re-testing when target = this.value.
    // If this.left exists, check it.
    if (node.left !== null){
      var childResult = node.contains(target, node.left);
      // Only override result if result is true.
      if (childResult){
        result = childResult;
      }
    }
  }

  return result;
}

BinarySearchTree.prototype.depthFirstLog = function(cb, node){
  var node = node || this;  // Start at root if node is unspecified.
  //
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
