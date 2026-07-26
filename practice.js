// 
//     if (temp > 35){
//         // let hot = "Hot";
//         return "Hot";
//     }
//     else if (temp <10){
//         let cold = "Cold";
//         return cold;
//     }
//     else {
//         let normal = "Normal";
//         return normal;
//     }
// }
// console.log(checkTemp(38));

// function reverseNumber(num) {
//     let str = num.toString();
//     let reverse = str.split ("").reverse().join("");
//     return parseInt(reverse);
// }

// console.log(reverseNumber(12345));
// console.log(reverseNumber(7));

// function productOfDigits(num) {
//     let str = num.toString();
//     let product = 1;
//     for (let i = 0; i < str.length; i++) {
//         product *= parseInt(str[i]);
//     }
//     return product;
// }

// console.log(productOfDigits(123)); // 6
// console.log(productOfDigits(456)); // 120   
function getOddNumber (num) {
    let arr = [];
 for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
   return arr;
 }
}
 console.log(getOddNumber(10)); // [1, 3, 5, 7, 9]
 
 function countVowels(str){
    let vowels = "aeiou";
    let count = 0;
    for (let i= 0; i < str.length; i++){
        if ( vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
  
 console.log(countVowels ("javascript"));
