const assertEqual = function(actual, expected) {
	if(actual !== expected){
console.log("Assertion Failed: " + actual + " !== "+ expected );
}

	else{
	console.log("Assertion Passed: " + actual + " === "+ expected );

}
};


const findKeyByValue = function(allItems, itemsToSearch) {
  Object.keys(allItems);
  const results = {}
  var str = "";
  for (const item of Object.keys(allItems)) {
    //console.log(item);
    if (allItems[item] === itemsToSearch) { 
   
      str =  item;
      return str;
    }

  
  
  

}

};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");