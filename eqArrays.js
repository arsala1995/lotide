


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


module.exports = eqArrays;
