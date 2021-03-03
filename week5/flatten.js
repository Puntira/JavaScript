    function flatten(arr) {
        var arr2 = [];//สร้างอาาเรย์
        for (let i = 0; i < arr.length; i++) { // อาเรย์ใหญ่
            for(let j = 0 ; j < arr[i].length ; j++){
                arr2.push(arr[i][j])
            }


        }
        return arr2;
    }
    console.log(flatten([[1,2],[3,4]])); // [0,0][0,1][1,0][1,1]

    