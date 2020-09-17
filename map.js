
const assertArraysEqual = function(actual, expected) {
  
	if(!eqArrays(actual, expected)){
console.log("Assertion Failed: " + actual + " !== "+ expected );

}

	else{
  console.log("Assertion Passed: " + actual + " === "+ expected );
  
  }

};

const eqArrays = function(Array1, Array2){
  return Array.isArray(Array1) &&
    Array.isArray(Array2) &&
    Array1.length === Array2.length &&
    Array1.every((val, index) => val === Array2[index]);


};

const map = function(array, callback){
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];
const test = [ 'g', 'c', 't', 'm', 't' ];
const test1 = [ 'g', 'c', 't', 'l', 't' ];
assertArraysEqual(map(words, word => word[0]), test);
assertArraysEqual(map(words, word => word[0]), test1);