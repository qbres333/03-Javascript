// TODO: What does 'this' refer to?
//this refers to the global scope (the browser window)
console.log(this);

// TODO: What does 'this' refer to?
//this refers to the function helloThis()
function helloThis() {
   console.log(`Inside this function, this is ${this}`);
}

// TODO: What will this log?
//this logs the child's age in ten years
const child = {
   age: 10,
   ageTenYears: function() {
      console.log(this.age + 10);
   }
};

// TODO: What will this log?
//this logs the investment's balance after 15% growth
const investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
