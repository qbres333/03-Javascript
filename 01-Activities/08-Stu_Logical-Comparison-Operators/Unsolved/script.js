const a = "50";
const b = 50;
const c = 100;
const d = c % b; // 0
const e = c / 2; // 50

const expression1 = (b === e); //50 === 50
const expression2 = (e < d); //changed to greater than, which changed the last 2 logs to true

// Use comparison operators so all expressions below log to the console as true
console.log(a == b);
console.log(b === e); //changed to strictly equal
console.log(c > b);
console.log(d == 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && !expression2);
console.log(expression1 || expression2);
  
console.log(typeof(NaN));