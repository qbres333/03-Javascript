// WRITE YOUR CODE BELOW
const students = ["Finola", "Alanna", "Steven", "Yasemin", "John"]

console.log(`The array has ${students.length} elements.`);

for(let i = 0; i < students.length; i++) {
    console.log(`Great to see you, ${students[i]}!`);
}

for(const name of students) {
    console.log(`Great to see you, ${name}!`);
}
// ----------------- use a while loop -------------------
let result = "";
let j = 0;


while(j < students.length) {
    console.log(`Great to see you, ${students[j]}!`);
    j++;
}