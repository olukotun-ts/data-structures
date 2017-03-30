var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};



  // connect
  // extend(someInstance, stackMethods);

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  //console.log(someInstance);

  return someInstance;
};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var stackMethods = {};


  // Implement the methods below
  stackMethods.push = function(value) {
    var index = this.size();
    this.storage[index] = value;
  };




  stackMethods.pop = function() {
    var index = this.size()-1;
    var temp = this.storage[index];
    delete this.storage[index];
    return temp;
  };

  stackMethods.size = function() {
    return Object.keys(this.storage).length;
  };
