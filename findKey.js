const assertEqual = function(actual) {

  console.log("The answer is: " + actual);

};


const findKey = function(allItems, itemsToSearch) {
  Object.keys(allItems);
  const results = {}
  var str = "";
  for (const item of Object.keys(allItems)) {
 
    if (itemsToSearch(allItems[item])) { 
      
      return item;
      break;
    }

  }
  
}



assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, function(x){
  if(x.stars === 3){
    return true;
  }
  else{
 return false;
  }
} )) // => "noma"
