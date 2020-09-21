const eqArrays = function(Array1, Array2){

  for( var i = 0; i < Array1.length; i++){
  for( var j = i; j < Array2.length; j++){

 if(Array1[i] != Array2[j]){
  return false;
}

  else{
  return true;
}
}
}

};




const middle = function(array) {
 
for(var i = 0; i < array.length; i++){
  var theMiddle = (array.length / 2);
  var value = [];

  if(array.length === 1){
    return value;
  }
  if(array.length === 2){
    return value;
  }
  if(array.length % 2 === 0) {

    value.push(array[theMiddle-1])
    value.push(array[theMiddle]);
  }

  else {
    
    var value1 = [];
     
   var theMiddle1 = Math.floor(array.length / 2);
   value1.push(array[theMiddle1]);
      return value1;
  }
  
}

  return value;
}




// assertArraysEqual(middle([1]));
// assertArraysEqual(middle([1, 2]));
// assertArraysEqual(middle([1, 2, 3]));
// assertArraysEqual(middle([1, 2, 3, 4]));

module.exports = middle;