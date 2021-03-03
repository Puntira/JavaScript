function numberspilt(num){
    var arr = [];
    if((num % 2) == 1){
        arr.push(Math.ceil(num/2));
        arr.push(Math.ceil(num/2)-1);
    }else {
        arr.push(Math.ceil(num/2));
        arr.push(Math.ceil(num/2));
    }
    return(num);
}