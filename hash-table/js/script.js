
var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
    console.log(
      "Line 15:: "+
      ", Called: "+called+
      ", String: "+string+
      ", I: "+i+
      ", Hash: "+hash);
  }
  return hash;
};
var HashTable = function() {
  this.collection = {};

  this.add = (k ,v) => {
    var hashed = hash(k);
    if(!this.collection[hashed]){
    this.collection[hashed] = [{[k]:v}];
    } else {
       this.collection[hashed].push({[k]:v});
    }
    return this.collection[hashed];
  };

  this.remove = (k) => {
    var hashed = hash(k);
    // if(this.collection[hashed])
    // delete this.collection[hashed];

    if(this.collection[hashed]){
      for(var i=0;i<this.collection[hashed].length;i++){
        if(this.collection[hashed][i][k]){
          this.collection[hashed].splice(i,1);
        }
      }
      if(this.collection[hashed].length === 0){
        delete this.collection[hashed];
      }
    }
  };

  this.lookup = (k) => {
   var hashed = hash(k);
   if(this.collection[hashed]){
    for(var i = 0; i<this.collection[hashed].length; i++){
      if(this.collection[hashed][i][k]){
        return this.collection[hashed][i][k];
      }
    }
   }
   return null;
  };
};

var ht = new HashTable();

ht.add("string",1);
console.log(ht.collection);

ht.add("hello",5);
console.log(ht.collection);

ht.add("goodbye",5);
console.log(ht.collection);

ht.remove("h");
console.log(ht.collection);

ht.remove("hello");
console.log(ht.collection);
