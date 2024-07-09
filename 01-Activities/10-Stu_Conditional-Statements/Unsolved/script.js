// Change the values and operators below to test your algorithm meets all conditions
const x = 50;
const expression1 = (x <= 50);
const expression2 = (x >= 50);

// Write Your JavaScript Code Here
if(expression1 && expression2) {
    console.log(expression1, '\u2705', expression2, '\u2705')
}
else if(expression1 && !expression2) {
    console.log(expression1, '\u2705', expression2, '\u274C')
}
else if(!expression1 && expression2) {
    console.log(expression1, '\u274C', expression2, '\u2705')
}
else {
    console.log(expression1, '\u274C', expression2, '\u274C')
}

// \u2705 is check mark
// \u274C is cross mark