function factorial(x){
  var fact = x;
  for (var i = 1; i < x ; i++) {
    fact *= (x - i);
  }
  return fact;
}

console.log(factorial(3));