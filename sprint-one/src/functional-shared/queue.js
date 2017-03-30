var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.finish = 0;

  // Extend queueMethods.
  extend(someInstance, queueMethods);

  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.finish] = value;
  this.finish++;
};

queueMethods.dequeue = function(){
  if (this.finish - this.start > 0){
    var temp = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return temp;
  }
};

queueMethods.size = function(){
  return this.finish - this.start;
};
