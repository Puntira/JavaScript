function removeABC(str){
    if(str.match(/[abc]/)){   //เช็คว่าเจอตัวที่เราจะตัดไป
        for(let i = 0; i < str.length ; i++){
        str = str.replace(/[abc]/,' ')
        }
    
        return str
    }
    else return null
    
}
console.log(removeABC("This might be a bit hard"))
console.log(removeABC("hello world!"))
console.log(removeABC(""))
