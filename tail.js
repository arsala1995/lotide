const assertEqual = function(actual, expected) {
	if(actual !== expected){
		console.log("Assertion Failed: " + actual + " !== "+ expected );
		}
		
			else{
			console.log("Assertion Passed: " + actual + " === "+ expected );
		
		}
};


const tail = function(actual1){
var tail1 = actual1.slice(1).join(" ");


return tail1;
}

module.exports = tail;

