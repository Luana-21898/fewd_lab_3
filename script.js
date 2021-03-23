// Question 3
function greet() {
    console.log('Haydo!');
}
var salutation = greet();


// Question 4
function echo(sound) {
    return sound;
    }


    // Question 5
function greet(name) {
    return console.log('Hello ' + name + '!');
}
greet('Luana');


// Question 8
function shout(string) {
    return console.log(string + string);
}
shout('Fire');


// Question 11
function doSomething(name) {
    return name;
}
console.log(doSomething('Luana'));


// Question 12
function multiplyFive(number) {
    return 5 * number;
}
console.log(multiplyFive(5));


// Question 13
function myFunction() {
  alert ("Hello World!");
}


// Question 14
var isAnswerRight = true;
isAnswerRight ? console.log('The answer is right!') : ('The answer is wrong!');


// Question 15
function tellFortune(NumberOfChildren, PartnerName, GeographicLocation, JobTitle){
    return console.log("You will be a " + JobTitle + " in " + GeographicLocation +
    " and married to " + PartnerName + " with " + NumberOfChildren + " kids.");
}
tellFortune(3, 'Matteo', 'France', 'Android Developer');
tellFortune(2, 'Victor', 'Brazil', 'Front End Developer');
tellFortune(5, 'Andrew', 'Berlin', 'Heir');
