function simplePair(arr,value){
    let sum1 = arr[0]*arr[1];
    let sum2 = arr[0]*arr[2];
    let sum3 = arr[1]*arr[2];
    let reArr =[];
    if(value == sum1){
        reArr.push(arr[0]);
        reArr.push(arr[1]);
        return reArr;
    }else if(value == sum2){
        reArr.push(arr[0]);
        reArr.push(arr[2]);
        return reArr;
    }else if(value == sum3){
        reArr.push(arr[1]);
        reArr.push(arr[2]);
        return reArr;
    } else return null;
}
console.log(simplePair([1,2,3],3))
console.log(simplePair([1,2,3],6))
console.log(simplePair([1,2,3],9))