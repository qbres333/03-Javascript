// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

// Logs "They are equal in type and value"
isEqual(10, 10);

// Refer to sample functions as needed!

// TODO: Call the isEqual function so that it logs "They are equal in value"
isEqual("true", true);
// TODO: Rewrite isEqual as a function expression called 'isEqualTakeTwo`
function isEuqalTakeTwo(a, b) {
  if(a !== b || a != b) {
    console.log('They are not equal');
  }
  else {
    console.log('They are equal in type and value');
  }
  return;
}
// TODO: Call the isEqualTakeTwo function so that it logs "They are not equal"
isEuqalTakeTwo(4,4);