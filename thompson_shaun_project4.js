// Shaun M Thompson
// SDI 1301
// 1/31/2013
// Assignment 4

var myLibrary = function() {

	// Does a string follow a 123-456-7890 pattern like a phone number?
	var checkPhone = function(number) {
		var areaCode = 	(number.substring(0,3)),
			prefix = 	(number.substring(4,7)),
			suffix = 	(number.substring(8,12));
	
		if (number.length === 12 && isNaN(areaCode, prefix, suffix) == false && number.charAt(3,7) === "-"){
			return true;

		} else {
			console.log("This is not the correct telephone number format.");
			return false;
		};
	
	
	};
	
	// Does a string follow an aaa@bbb.ccc pattern like an email address?
	var checkEmail = function(address){
		var at = address.indexOf("@"),
			com = address.lastIndexOf(".com"),
			username = address.substring(0, at),
			server = address.substring(at+1, com),
			email = username + "@" + server + ".com";
		
		if (address === email){
			return true;
		} else {
			return false;
		
		};
		
	};


	// Is the string a URL? (Does it start with http: or https:?)
	var checkURL = function(url){
		var hypertext = url.lastIndexOf("/"),
			protocol = url.substring(0, hypertext+1)
			page = url.substring(hypertext+1, url.length);
				
		if(protocol === "https://" || protocol === "http://"){
			return true;
		} else {
			return false;
		
		};

	};
	

	// Title-case a string (split into words, then uppercase the first letter of each word).	
	var capslock = function(sentence) {
   		var words = sentence.split(" "),
   			charArray = Array();
   			
   		for (character in words){
      		change = words[character].toLowerCase();
      		change = change.charAt(0).toUpperCase() + change.substring(1);
      		charArray.push(change);
   		};
   		return charArray.join(" ");
	};
	

	// Given a string version of a number, such as “42”, return the value as an actual Number data type, such as 42.
	var changeNum = function(value){
		return parseFloat(value);
	};
	
		
/*	var myString.substring(0,?){
	
	var end = myString.indexOf("-");
	
	var start = myString.indexOf("-")+1;
	var end = myString.indexOf("-");
	
	var start = myString.lastIndexOf("-")+1;
	var end = myString.length;	
	}
		
*/
	
	
		// Find the smallest value in an array that is greater than a given number

	

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
	
	
	
	
	//library return
	return {
		"checkPhone": checkPhone,
		"checkEmail": checkEmail,
		"checkURL": checkURL, 
		"capslock": capslock,
		"changeNum": changeNum,
		
		"checkNumeric": checkNumeric,
		"areYouLee": 	areYouLee,
		"checkString":	checkString
	}



};

var newLib = new myLibrary();
console.log("Assignment 4 - Function Library (6)");
console.log("----------------------------------------");
console.log("1. Is this a phone number?: " + newLib.checkPhone("111-111-1111"));
console.log("2. Is this an email address?: " + newLib.checkEmail("ShaunThompson@live.com"));
console.log("3. Is this a URL address?: " + newLib.checkURL("https://success.com")); 
console.log("4. Change sentence to capitals: " + newLib.capslock("hello my name is shaun"));
console.log("5. Change a string to a number: (following line)");
console.log(newLib.changeNum("42"));


console.log("----------------------------------------");
console.log("Assignment 4 - Extra Credit");
console.log("----------------------------------------");

console.log("Is this a number?: " + newLib.checkNumeric(156));
console.log("Is this Lee?: " + newLib.areYouLee("Lee"));
console.log("The dash is in the position: " + newLib.checkString("123-456"));








