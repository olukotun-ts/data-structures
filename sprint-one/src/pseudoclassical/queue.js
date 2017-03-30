var Queue = function() {
  this.storage = {};
  this.start = 0;
  this.finish = 0;
};

Queue.prototype.enqueue = function (val){
  this.storage[this.finish] = val;
  this.finish++;
};

Queue.prototype.dequeue = function (){
  if (this.size() > 0){
    var temp = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return temp;
  }
};

Queue.prototype.size = function (){
  return this.finish - this.start;
};
