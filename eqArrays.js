const assertEqual = function(actual, expected) {
        if(actual !== expected){
console.log("Assertion Failed: " + actual + " !== "+ expected );
}

        else{
        console.log("Assertion Passed: " + actual + " === "+ expected );

}
};


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


console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
