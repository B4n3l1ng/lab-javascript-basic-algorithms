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
function logNameSpacesCaps (name) {
    let newName = "";
    for (let i=0; i< name.length; i++) {
        newName += name[i].toUpperCase() + " ";
    }
    console.log(newName);
}

 logNameSpacesCaps (hacker1);

 function logNameBackwards (name) {
    let newName = "";
    for (let i=name.length-1; i>=0; i--) {
        newName += name[i];
    }
    console.log (newName);
 }
 logNameBackwards (hacker2);

 function lexiconOrder (name1, name2) {
    let lexiName1 = name1.toLowerCase();
    let lexiName2 = name2.toLowerCase();
    if (lexiName1 > lexiName2) {
        console.log("The driver's name goes first.");
    } else if (lexiName2 > lexiName1) {
        console.log("Yo, the navigator goes first definitely.")
    } else {
        console.log("What?! You both have the same name?");
    }
 }

 lexiconOrder(hacker1,hacker2);