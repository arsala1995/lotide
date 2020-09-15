const assertEqual = function(actual2, expected) {
        for (var i = 0; i < actual2.length; i++){

	for ( var j = 0; j < expected.length; j++){

	if(actual2[i] !== expected[j]){
	console.log("Assertion Failed: " + actual2 + " !== "+ expected );
}

        else{
        console.log("Assertion Passed: " + actual2 + " === "+ expected );


}
}
}
};


const tail = function(actual1){
var tail = actual1.slice(1);

return tail;
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

