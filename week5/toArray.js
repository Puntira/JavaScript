function toarray(obj){
    let key = Object.keys(obj)//key คือ เจ้าของ
    let val = Object.values(obj) // ข้อมุลที่อยู่ในนั้น
    let arr_key_val = []

    

    for (let index = 0 ; index < key.length ; index++) {
        arr_key_val.push([key[index],val[index]])
    } 
    return arr_key_val
}
console.log(toarray({ a: 1, b: 2 })); 
console.log(toarray({ shrimp: 15, tots: 12 })); 
console.log(toarray({ })); 

//➞ [["a", 1], ["b", 2]

