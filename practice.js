function checkTemp (temp) {
    if (temp > 35){
        // let hot = "Hot";
        return "Hot";
    }
    else if (temp <10){
        let cold = "Cold";
        return cold;
    }
    else {
        let normal = "Normal";
        return normal;
    }
}
console.log(checkTemp(38));

function reverseNumber(num) {
    let str = num.toString();
    let reverse = str.split ("").reverse().join("");
    return parseInt(reverse);
}

console.log(reverseNumber(12345));
console.log(reverseNumber(7));