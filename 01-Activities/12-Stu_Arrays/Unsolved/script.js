// WRITE YOUR CODE HERE
let names = ["Alana", "Steven", "Finola", "Yasemin", "Luigi", "Bradyn"];

console.log("The array has",names.length,"elements.");

for(i = 0; i < names.length; i++) {
    console.log("Welcome to the class,", names[i]);
}

names[0] = "Channing Tatum"

if(names[0] !== "Alana") {
    console.log(`Welcome to the class, ${names[0]}`);
}
