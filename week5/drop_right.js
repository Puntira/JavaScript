function dropRight(arr_num,num=1){
    return arr_num.splice(0,arr_num.length-num)
}

console.log(dropRight([1,2,3]));
console.log(dropRight([1,2,3],2));
