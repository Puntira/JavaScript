function highestDigit(num){//เอาเลขท่มากสุดโชว์
    var number;
    var higDigit = 0;
    while(num!=0){
        number = num%10;
        if(number > higDigit)
            higDigit = Math.floor(number);
        num = num/10;
    }
    return(higDigit);
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));

