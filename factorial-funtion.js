function factorial (number){
    let fact =1;
    for(let i=1; i<=number; i++)
    {
        fact = fact*i;
    }
    return fact;
}
var firstfactorial = factorial(5);
console .log('Factorial of 5 is: ', firstfactorial);

var secondFactorial = factorial(7);
console.log('Factorial of 7 is: ', secondFactorial);