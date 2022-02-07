//problem 3

function picnicBudget(members){
    const budgetPer100 = 5000;
    const budgetPer200 = 4000;
    const budgetMore201 = 3000;
    if(members<=100){
        totalCost = members * budgetPer100;

        return totalCost;
    }
    //input parameter error check
    else if(members<=0){
        console.log('Please enter positive member!')
    }
    else if(members>100 && members<=200){
        costFor100 = 100 * budgetPer100;
        var members200 = members-100;
        costFor200 = members200 * budgetPer200; 
        totalCost = costFor100 + costFor200;

        return totalCost;
    }
    else{
        costFor100 = 100 * budgetPer100;
        costFor200 = 100 * budgetPer200;
        var members300 = members -200;
        costFor300 = members300 * budgetMore201;
        totalCost = costFor100 + costFor200 + costFor300;

        return totalCost;
    }   
}
var givenMembers = picnicBudget(250);
console .log(givenMembers);