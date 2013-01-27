// test from video


var myLibrary = function() {

	//CHECK NUMERIC FUNCTION
	var checkNumeric = function(val){
		if (isNaN(val)){
			return false;
		} else {
			return true;
		}
	}
	
	// NAME FUNCTION
	var areYouLee = function(val){
		if (val === "Lee"){
			return true;
		} else {
			return false;
		}
	
	}
	
	// CHECK STRING PATTERN
	var checkString = function(val){
	
		var strLen = val.length;
		for (var i=0; 1 <= strLen; i++){
			if (val.substring(i, i+1) === "-"){
				return i;
			}
		};
	
	}
	
	
	
	
	
	return {
		"checkNumeric": checkNumeric,
		"areYouLee": 	areYouLee,
		"checkString":	checkString
	}



};

var newLib = new myLibrary();

console.log("Is this a number" + newLib.checkNumeric(156));
console.log("Is this Lee?" + newLib.areYouLee("Lee"));
console.log("The dash is in the position " + newLib.checkString("123-456"));








