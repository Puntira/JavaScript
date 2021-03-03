function starRating(arr_num){
    let sum = (arr_num[0]*1 + arr_num[1]*2 + arr_num[2]*3 + arr_num[3]*4 + arr_num[4]*5)
    / (arr_num[0]+arr_num[1]+arr_num[2]+arr_num[3]+arr_num[4])
    return `[${sum.toFixed(2)}] ${'*'.repeat(Math.round(sum))}`
}

console.log(starRating([55,67,98,115,61]));

