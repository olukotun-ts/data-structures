var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};

  return newStack;
};

var stackMethods = {};

stackMethods.push = function (val){
  this.storage[this.size()] = val;
}

stackMethods.pop = function (){
  var temp = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return temp;
}

stackMethods.size = function (){
  return Object.keys(this.storage).length;
}
