// Iteration 1: Names and Input
//
console.log("I'm ready")


// Iteration 1: Names and Input
//
const hacker1 = "Eric";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Giulia";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
function nameSize (driver, navigator) {
    const size1 = driver.length;
    const size2 = navigator.length;
    if (size1>size2) {
        console.log (`The driver has the longest name, it has ${size1} characters.`)
    } else if (size2>size1) {
        console.log (`It seems that the navigator has the longest name, it has ${size2} characters.`);
    } else if (size1===size2) {
        console.log (`Wow, you both have equally long names, ${size1} characters!`);
    } else {
        console.log ("Something went wrong!");
    }
}

nameSize(hacker1, hacker2);

// Iteration 3: Loops
