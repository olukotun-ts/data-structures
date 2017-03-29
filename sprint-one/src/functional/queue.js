var Queue = function() {
  var someInstance = {};

  var start = 0;
  var finish = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[finish] = value;
    finish++;
  };

  someInstance.dequeue = function() {
    if (finish - start > 0){
      var temp = storage[start];
      delete storage[start];
      start++;
    }
    return temp;
  };

  someInstance.size = function() {
    return finish - start;
  };

  return someInstance;
};
