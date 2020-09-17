const assertEqual = function(actual) {
	console.log(actual);


};

const letterPositions = function(sentence) {
  const results = {};


sentence = sentence.replace(/ /g,'');
var spl = sentence.split("");
var arr = [];

for(var i = 0; i < spl.length; i++){
  const letter = spl[i];
 
  if (results[letter]) {
     arr.push(i);
    results[letter] = arr;
  } else { 
    arr.push(i);
    results[letter] = arr;
  }
}
  return results;

};






assertEqual(letterPositions("lighthouse in the house"));
