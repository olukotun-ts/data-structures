var Queue = function() {

  var newQueue = Object.create(queueMethods);

  newQueue.start = 0;
  newQueue.finish = 0;
  newQueue.storage = {};

  return newQueue;

};

var queueMethods = {};

queueMethods.enqueue = function(val){
 this.storage[this.finish] = val;
 this.finish++;
};


queueMethods.dequeue = function(){
  if (this.size()){
    var temp = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return temp;
  }
};


queueMethods.size = function(){
  return this.finish - this.start;
};
