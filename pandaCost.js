//problem 2

function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity){
    const perSingaraPrice = 7;
    const perSomuchaPrice = 10;
    const perJilapiPrice = 15;
    //calculation
    const singaraTotalPrice = singaraQuantity * perSingaraPrice;
    const somuchaTotalPrice = somuchaQuantity * perSomuchaPrice;
    const jilapiTotalPrice = jilapiQuantity * perJilapiPrice;

    const totalPrice = singaraTotalPrice + somuchaTotalPrice + jilapiTotalPrice;
    return totalPrice;

}
const givenPandaOrder = pandaCost(1,2,1);
console .log(givenPandaOrder);