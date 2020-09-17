const takeUntil = function(array, callback) {
  
  var arr = [];
  var newCall ="";

  for(var i = 0; i < array.length; i++){
     newCall = callback(array[i]);
     
  if(newCall){
    arr.push(array[i])
    
  }
  else{
    break;
  }
    
  }
  return arr;
}

const secData = function(x){
  if(x < 0){
    return false;
  }
  else{
 return true;
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, secData);
console.log(results1);

console.log('---');

const secData1 = function(x){
  if(x === ','){
    return false;
  }
  else{
 return true;
  }
}

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, secData1);
console.log(results2);
