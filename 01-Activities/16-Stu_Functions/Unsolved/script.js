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

// Logs "They are equal in value"; and will show that line number
isEqual(5, '5');

// Refer to sample functions as needed!

// TODO: Call the isEqual function so that it logs "They are equal in value"
isEqual(8, '8');

// TODO: Rewrite isEqual as a function expression called 'isEqualTakeTwo`
const isEqualTakeTwo = function(a, b) {
  if(a !== b || a != b) {
    console.log('They are not equal');
  }
  else {
    console.log('They are equal in type and value');
  }
  return;
}
// TODO: Call the isEqualTakeTwo function so that it logs "They are not equal"
isEqualTakeTwo(4,'4');