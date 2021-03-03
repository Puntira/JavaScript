    function median(arr_num){
        let div = [Math.ceil((arr_num.length-1)/2),Math.floor((arr_num.length-1)/2)]
        /*let div = Array

        if(arr_num.length % 2 == 0){
            div = [(arr_num.length/2)-1,arr_num.length/2]
        }*/
        return (arr_num[div[0]]+arr_num[div[1]]) /2

    }

    console.log(median([1,2,4,5,6,8,8,8,10]));
    console.log(median([2,2,6,8,8,10,10]));
    console.log(median([1,2,2,4,7,8,9,10]));
    console.log (median([1,3,6,8,9,7]));





