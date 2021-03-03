function sumTwoSmallNums(arr){
    
        var Sum = 0;
        var arrSum = [];
        var min = arr[0];
        var min2 = arr[0];

        for (let i = 0; i < arr.length; i++){
            if(arr[i] < min){
                if(arr[i] > 0){
                    min = arr[i];
                }
            }

            if(arr[i] > min2){
                min2 = arr[i];
            }
        }

        for (let i = 0;i < arr.length; i++){
            if(arr[i] != min){
                if(arr[i] > 0){
                    if(arr[i] < min2){
                        min2 = arr[i];
                    }
                }
            }
        }
        
        arrSum.push(min);
        arrSum.push(min2);

        for (let i = 0;i < arrSum.length; i++){
            Sum  += arrSum[i];
        }
        
        console.log("minimum 1 : " + min);
        console.log("minimum 2 : " + min2);
        return "Sum : " + Sum;
    } 

    console.log(sumTwoSmallNums([19, 5, 42, 2, 77]));
    console.log(sumTwoSmallNums([10, 343445353, 3453445, 3453545353453]));
    console.log(sumTwoSmallNums([2, 9, 6, -1]));
    console.log(sumTwoSmallNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]));
    console.log(sumTwoSmallNums([3683, 2902, 3591, -475, 1617, -2385]));