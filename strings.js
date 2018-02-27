// Challenge #1

var numOfSandwiches = 4*2;
console.log("numOfSandwiches", numOfSandwiches);

// Challenge #2

var name = "Amanda"
var string = "Hello, " + name +" how are you doing today?"
console.log("string", string);

// Challenge #3

var DNA = "GCAT"
var RNA =  DNA.replace('T', 'U');
console.log("RNA:", RNA);

// Challenge #4

var animal = "ALLigator"
if(animal.toLowerCase() === "alligator"){
    console.log("small")
}else {
    console.log("wide")
}

var yarn = "the better string";
var domString = "<h4>" + yarn + "</h4>";

var myDiv = document.getElementByID('yarn-holder');
myDiv.innerHTML = domString;