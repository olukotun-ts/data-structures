var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (list.head === null){ // checking to see if the list is empty
      list.head = newNode;
      list.tail = newNode;

    } else if (list.head.next === null){ // check to see if we only have one node in the list
      list.head.next = newNode;
      list.tail = newNode;

    } else { // we have 2 or more elements in the list
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    if (list.head !== null){
      // get the next node
      var temp = list.head;
      // set the next node
      list.head = list.head.next;
      return temp.value;

    }
  };

  list.contains = function(target) {
    // begining at head, check if node.value equals target
    var tracker = list.head;

    // keep checking until there no more nodes in the list
    while (tracker !== null){ // falling off the end of the list
      if (tracker.value === target){
        return true;
      } else {
        tracker = tracker.next; // keep moving forward until there is nowhere else to go
      }
    }
    return false;
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
// hello there
