const assertArraysEqual = function(actual, expected) {


        
        console.log("New Array is: " + actual);

};


const without = function(source, itemsToRemove){

	var Array3 = [];
for (var i = 0; i<itemsToRemove.length; i++) {
    var arrlen = source.length;
    for (var j = 0; j<arrlen; j++) {
        if (itemsToRemove[i] == source[j]) {
            Array3  = source.slice(0, j).concat(source.slice(j+1, arrlen));
        }
    }
}
return Array3;
};
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



