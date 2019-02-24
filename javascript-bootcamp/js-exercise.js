// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var age = prompt("What is your age?");
// console.log("Your full name is " + firstName + " " + lastName + ".");
// console.log("Your age is " + age + " years old.");

var yearsOld = prompt("How old are you?");
// alert("You are " + yearsOld * 365 + " days old.");
if (Math.pow(yearsOld, 0.5) % 1 === 0) {
    console.log("Your age is a perfect square!!!");
} else if (yearsOld === "21") {
    console.log("Happy 21st Birthday! Here's a free shot!");
} else if (yearsOld % 2 === 1) {
    console.log("Your age is odd!");
} else if(yearsOld < 0) {
    console.log("Error!!!!");
}