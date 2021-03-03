        function count(num){
            let x = "dsdfggrffvbb";
        let y = x.match(/[abc]/gi);


            return x.filter((value)=> value >=0).length;
            
            let arr_num = Array.from(String(num))
            if(arr_num[0] == "-"){
                return arr_num.length-1
            }
            else{
                return arr_num.length
            }
            
        }

        console.log(count(318))
        console.log(count(-92563))
        console.log(count(4666))
        console.log(count(-314890));