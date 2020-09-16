const assertEqual = function(actual) {
	console.log(actual);


};

/*
  newObj[key] = value;
  newObj[key] = newObj[key] + 1 
  newObj = {
    a: [...],
    l: [...],
    b: [...],
    ..
  }
*/

const countLetters = function(string){
var newObj = {};
var count = 0;
string = string.replace(/ /g,'');
var spl = string.split("");


for(var i = 0; i < spl.length; i++){
    const letter = spl[i];
   
    // spl[i] is already in the newObj
    if (newObj[letter]) {
      newObj[letter] += 1;
    } else { // spl[i] is not in newObj
      newObj[letter] = 1;
    }
    
  }

return newObj;

};

assertEqual(countLetters("lighthouse in the house"));