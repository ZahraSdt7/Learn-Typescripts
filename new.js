// var usernum = 0 
// var sum = 0
// var counter = 0

// while(usernum != -1){
// sum+=usernum
// usernum = Number(prompt("Enter the number:"))
// if(usernum != -1){
//     counter++
// }
// }
// console.log("the numer is:"  , sum /counter);
//////////////////////////////////////////////////////////////////////
let sum = 0;
let counter = 0;
let usernum = Number(prompt("Enter the number (-1 to finish):"));

if (usernum !== -1) {
    sum += usernum;
    counter++;

    while (true) {
        usernum = Number(prompt("Enter the number (-1 to finish):"));
        if (usernum === -1) break;
        sum += usernum;
        counter++;
    }

    console.log("The average is:", sum / counter);
} else {
    console.log("No numbers were entered.");
}


/////////////////////////////

let sum = 0;
let counter = 0;
let usernum;
usernum = Number(prompt("Enter the number (-1 to finish):"));
while (usernum !== -1) {
    sum += usernum;
    counter++;
    usernum = Number(prompt("Enter the number (-1 to finish):"));
}
console.log(counter > 0 ? `The average is: ${sum / counter}` : "No numbers were entered.");
//////////////////////////////
let sum = 0;
let counter = 0;
let usernum = 0;

do {
    sum += usernum;
    counter += usernum !== -1 ? 1 : 0; 
    usernum = Number(prompt("Enter the number (-1 to finish):"));
} while (usernum !== -1);

console.log(counter > 0 ? `The average is: ${sum / counter}` : "No numbers were entered.");
////////////////////////////////////////