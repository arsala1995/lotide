const assertEqual = function(actual2, expected) {
        if(actual2 !== expected){
console.log("Assertion Failed: " + actual2 + " !== "+ expected );
}

        else{
        console.log("Assertion Passed: " + actual2 + " === "+ expected );

}
};


const head = function(actual1){
	
	for( var i = 0; i < actual1.length; i++){
	
	var actual2 = actual1[0];
}	
	return actual2;


}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

