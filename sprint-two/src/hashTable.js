

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple;

  // if bucket exists
  if (bucket){
    var found = false;

    // check to see if the bucket contains tuple/temp
    for (var i=0; i<bucket.length; i++){
      // create a temp variable to hold tuple
      tuple = bucket[i];
      // if yes, then overwrite tuple value with v
      if (tuple[0]===k){
        tuple[1] = v;
        found = true;
        break;
      }
    }
    if (!found){
      // else add tuple to bucket
      bucket.push([k,v]);
    }
  } else { // else (bucket doesn't exist)
    bucket = [];
    tuple = [k, v];
    bucket.push(tuple); // add the tuple to the bucket
    this._storage.set(index, bucket); // add it to the storge
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  var tuple;

  // if bucket exists
  if (bucket){

    // check to see if the bucket contains tuple/temp
    for (var i=0; i<bucket.length; i++){
      // create a temp variable to hold tuple
      tuple = bucket[i];
      // if we find the tuple, return the value
      if (tuple[0]===k){
        return tuple[1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  var tuple;

  // if bucket exists
  if (bucket){

    // check to see if the bucket contains tuple/temp
    for (var i=0; i<bucket.length; i++){
      // create a temp variable to hold tuple
      tuple = bucket[i];
      // if we find the tuple, return the value
      if (tuple[0]===k){
        bucket.splice(i, 1);
        break;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
