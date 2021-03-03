function secondLargest(arr_num){
    arr_num.sort((a,b)=> b-a)
    return arr_num[2]
}
console.log(secondLargest([10,30,20,40,50,60]));
