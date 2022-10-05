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
//2.1
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
// 3.1
function logNameSpacesCaps (name) {
    let newName = "";
    for (let i=0; i< name.length; i++) {
        newName += name[i].toUpperCase() + " ";
    }
    console.log(newName);
}

 logNameSpacesCaps (hacker1);

 // 3.2
 function logNameBackwards (name) {
    let newName = "";
    for (let i=name.length-1; i>=0; i--) {
        newName += name[i];
    }
    console.log (newName);
 }
 logNameBackwards (hacker2);

 //3.3
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

 
 //Bonus1
 const paragraph= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus tempor, facilisis magna sodales, vestibulum sapien. Etiam vitae neque nec orci suscipit lacinia id in sapien. Curabitur eget diam sed lacus laoreet consectetur. Sed sollicitudin rutrum enim vel ultrices. Maecenas ut mi eu dolor pretium consectetur. Praesent sed ipsum mauris. Morbi molestie vel nisi eu tristique. Pellentesque vulputate augue vel vestibulum tempus. In hac habitasse platea dictumst. Cras ac consectetur metus, at vestibulum arcu. Donec tincidunt sagittis pulvinar. Ut eget quam eleifend, semper nisi rhoncus, sodales metus. Aenean id aliquet sapien. Fusce ipsum massa, interdum at turpis sit amet, rutrum congue ligula. Phasellus in ipsum metus. Nam ipsum ex, finibus eget dignissim in, dignissim ac metus. Ut eget maximus enim. Integer egestas ornare justo et imperdiet. In facilisis at ex id posuere. Praesent at porttitor massa, vel posuere dolor. In vehicula lacus nisi, vel vulputate felis scelerisque sit amet. Vivamus consectetur dolor eu ex aliquet faucibus. Ut ipsum orci, pulvinar at felis in, condimentum interdum felis.  Pellentesque interdum tincidunt enim, a ultrices tellus consectetur id. Suspendisse eu eros semper eros mattis auctor. Curabitur a imperdiet lacus, sit amet fermentum eros. Quisque venenatis justo porttitor libero dapibus rutrum at sed nibh. Mauris mollis ligula et lacus bibendum fermentum. Phasellus vehicula porttitor fermentum. Morbi condimentum leo ut pharetra laoreet. Nulla dapibus tincidunt purus, ac porttitor magna faucibus eu. Donec molestie justo pulvinar, convallis risus eget, pretium nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent luctus mi non velit pellentesque pharetra. Suspendisse vel suscipit lorem."

 function countWords (text) {
    let count=0;
    let splitParagraph = text.split(' ');
    return splitParagraph.length;
 }

 function countEt (text) {
    let count = 0;
    let splitParagraph = text.split(" ");
    for (let i=0; i< splitParagraph.length - 1; i++) {
        if (splitParagraph[i] === "et") {
            count++
        }
    }
    return count;
 }

 console.log(countWords(paragraph));
 console.log(countEt(paragraph));


 //Bonus 2
 const phraseToCheck = "Roma, amor";
 function checkIfPalin (phrase) {
    let toReplace = /[,!.]/g;
    let phraseArray = phrase.toLowerCase().replace(toReplace, " ");
    let size = phraseArray.length;
    let result;
    for (let i=0; i<size/2; i++) {
        if (phraseArray[i] !== phraseArray[size-1-i]) {
            result = false;
            break;
        } else {
            result = true;
        }
    }
    
    if (result === true) {
        console.log("It's a Palindrome");
    } else if (result === false) {
        console.log("It's not a Palindrome");
    }
 }
 checkIfPalin (phraseToCheck);