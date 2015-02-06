function factorial(x) {
  var fact = 1;

  if(x > 1) {
    fact = x * factorial(x - 1);
  }

  return fact;
}

console.log(factorial(0)); 
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));