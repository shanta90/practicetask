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

