

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; 
  
  if (!eqObjects(actual,expected)) {
    console.log("Assertion Failed: " + inspect(actual) + " !== " + inspect(expected));

  } else {
    console.log("Assertion Passed: " + inspect(actual) + " === " + inspect(expected));

  }
};


const eqArrays = function (Array1, Array2) {


  if (Array1.length !== Array2.length) {
    return false;
  }

  for (var i = 0; i < Array1.length; i++) {


    if (Array1[i] != Array2[i]) {
      return false;
    }

    else {

      return true;
    }
  }


};

const eqObjects = function (object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (var key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key]

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    }


    else if (value1 !== value2) {
      return false;

    }

  }

  return true;

};




const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);
