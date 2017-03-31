var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (list.head === null){
      list.head = newNode;
      list.tail = newNode;
      return;
    }
    list.tail.next = newNode;
    list.tail = newNode;
    return;
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
