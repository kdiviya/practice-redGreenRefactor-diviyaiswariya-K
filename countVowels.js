//minimal code from the Green phase

/*function countNoVowels(str){

    let count = 0;
    let vowels = "aeiou";
    let input = str.toLowerCase();
    let strArr = input.split("");
if(typeof str === "string"){
    for(let i = 0; i < strArr.length; i++) {
     if(vowels.includes(strArr[i])) {
            count += 1;             }   
}
            else{
            count =0;}
return count; 
}
else {
    return null;
}
} */

// countNoVowels() is return the number of vowels in the string.
function countNoVowels(str){

    let count = 0;
    let vowels = "aeiou"; //assign all vowels as string

    if(typeof str === "string") { //Check whether the input is of type string.
        let strArr = str.toLowerCase().split("");

            for(let i = 0; i < strArr.length; i++) {

                if(vowels.includes(strArr[i])) {
                count += 1;      //increment the count by 1 at each iteration when the strings contain the vowels.      
                }   
            }

        return count; 
    }

    else {
        return null;
    }
}

//export the module 
module.exports = countNoVowels;