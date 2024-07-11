// WRITE YOUR CODE BELOW
const students = ["Finola", "Alanna", "Steven", "Yasemin", "John"]

console.log(`The array has ${students.length} elements.`);

for(let i = 0; i < students.length; i++) {
    console.log(`Great to see you, ${students[i]}!`);
}

for(const name of students) {
    console.log(`Great to see you, ${name}!`);
}

let result = "";
let j = 0;

// do {
//     j = j+1;
//     result = result + j;
// } while (j < students.length);
/**this do-while loop runs when j = 5. Why? 
 * Because the code block is executed before the 
 * condition is tested. The code will always run at least once. */

// console.log(`Great to see you, ${students[j]}!`)

while(j < students.length) {
    console.log(`Great to see you, ${students[j]}!`);
    j++;
}