function isLeapYear(year){
    if(year%4==0){
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2006;
const isMyYearLearYear = isLeapYear(myYear);
console .log("Is my year leap year", isMyYearLearYear);