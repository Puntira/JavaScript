function compact(arr){
    let res = []; //ประกาศ array ว่าง
    for (const val of arr) {
        if(typeof val == 'number'){ //เช็คว่าเป็นเลขไหม
            res.push(val);//พอเป็นตัวเลขก็เอามาใส่ในarray
        }
    }
    return res
}

console.log(compact([0,1,false,2,"",3]));
