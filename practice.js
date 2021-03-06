//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
	if (name === "Tyler") {
		return true;
	}
	else {
		return false;
	}
};

console.log(isTyler("Tyler"));

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var getName = function() {
  var name = prompt("What is your name?");
  if (name.length > 0) {
    return name;
  }
};

getName();

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var getName = function() {
  var name = prompt("What is your name?");
  if (name.length > 0) {
    return name;
  }
};

var welcome = function() {
  var name = getName();
  alert("Welcome, " + name);
};

welcome();
//Next problem




//What is the difference between arguments and parameters?

	//Parameters are when the placeholders are defined.
	//Arguments are when the placeholders are used (invoked).

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

//falsy values include: undefined, 0, "", null, NaN, false
//test for truthy:  (variable) {}
//test for falsy:   (!variable) {}


//Next Problem

//Create a function called myName that returns your name

 var myName = function(){
 	return "Eric";
 }

//Now save the function definition of myName into a new variable called newMyName

 var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  var outerFn = function() {
  	return function() {
  		return "Eric";
  	};
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
  
  innerFn();