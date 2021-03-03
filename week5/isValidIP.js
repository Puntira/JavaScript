function isValidIP(ip){
    var arr = ip.split(".");
    console.log(arr);
    
    if (arr.length < 4 || arr.length > 4){
        return false;
    }

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 255 || arr[i] < 0){
            return false;
        }
    }

    for (let i = 0; i < arr.length; i++){
        if (arr[i][0] == "0"){
            return false;
        }
    }

    return true;
}

console.log(isValidIP('1.2.3.4'));
console.log(isValidIP('1.2.3'));
console.log(isValidIP('1.2.3.4.5'));
console.log(isValidIP('123.45.67.89'));
console.log(isValidIP('123.456.78.90'));
console.log(isValidIP('123.045.067.089'));
