//count the numbers of vowels in a string

function countVowel(sentence){
    let count = 0;
    for(let i=0; i<string.length; i++){
        
        let letter = sentence[i];
        if(letter == "a" || letter == "e" || letter == "i" ||
         letter == "o" || letter == "u"){
            count = count+1;
         }
    }
    return count;
}


let string = "quick brows fox";
console .log(countVowel(string)) ;
