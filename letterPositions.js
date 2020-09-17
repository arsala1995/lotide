const assertEqual = function (actual) {
  console.log(actual);


};

const letterPositions = function (sentence) {
  const results = {};


  //sentence = sentence.replace(/ /g, '');
  //var spl = sentence.split("");


  for (var i = 0; i < sentence.length; i++) {
   if(sentence[i] === " "){
     continue;
   }
    const letter = sentence[i];

    if (results[letter]) {

      results[letter].push(i);
    } else {
      results[letter] = [];
      results[letter].push(i);
    }
  }
  return results;

};






assertEqual(letterPositions("lighthouse in the house"));
