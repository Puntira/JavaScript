function numberSplit(num){
    var arr = [];
    if((num % 2) == 1){
        arr.push(Math.ceil(num/2)-1);
        arr.push(Math.ceil(num/2));
    }else {
        arr.push(Math.ceil(num/2)-1);
        arr.push(Math.ceil(num/2));
    }
    return(arr);
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
