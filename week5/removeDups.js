function removeDups(arr){
    var arrValue = [];
    var count = 0;

        for (let i = 0; i < arr.length; i++){
            for(let n = 0 ; n < arrValue.length ; n++){
                if (arrValue[n] == arr[i]){
                count = 1;
                }
            }
            if (count == 0){
                arrValue.push(arr[i]);
            }
        }
        return arrValue;
    }

    console.log(removeDups([1,0,1,0]));
    console.log(removeDups(["The","big","cat"]));
    console.log(removeDups(["John","Taylor","John"]));

    