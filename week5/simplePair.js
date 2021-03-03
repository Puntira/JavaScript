function simplePair(arr,value){
    var arrValue = [];
    var total = 0;

    for (let i = 0; i < arr.length; i++){
        for (let n = 0; n < arr.length; n++){
            total = arr[i] * arr[n];
            if (total == value){
                if (arr[i] == arr[n]){ //อธิบาย
                    return null;
                }
                arrValue.push(arr[i]);
                arrValue.push(arr[n]);
                return arrValue;
            }
        }  
    }
}

console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));