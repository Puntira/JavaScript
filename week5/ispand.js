function isPandigital(num){
    let arr_num = num.toString().split('').map((value)=>parseInt(value));
    //let arr_num = Array(Set num.map((value)=>parseInt(value))
    let arr = [];
    let arr_num_of = [1,2,3,4,5,6,7,8,9];
    for (const i of arr_num) {
        if(!arr.includes(i)) arr.push(i)
    }
    arr.sort((a,b)=>a-b)

    for (let i = 0; i <10; i++) {
        if(arr_num_of[i] == arr[i]){
            return true
        }
        else return false
    }
    
    //return arr
}
console.log(isPandigital(112233445566778899n));