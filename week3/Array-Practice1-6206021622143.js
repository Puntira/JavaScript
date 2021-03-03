let values1 = ['Apple',1,false];
let values2 = ['Frise',2,true];
let values3 = ['Mars',9,'Apple'];

    function compareArray(values1,values2,values3)

        {
            let a1= (typeof values1[0]==typeof values2[0]);
            let a2= (typeof values1[1]==typeof values2[1]);
            let a3= (typeof values1[2]==typeof values2[2]);
            let a4= (typeof values2[0]==typeof values3[0]);
            let a5= (typeof values2[1]==typeof values3[1]);
            let a6= (typeof values2[2]==typeof values3[2]);
            let a7= (typeof values1[0]==typeof values3[0]);
            let a8= (typeof values1[1]==typeof values3[1]);
            let a9= (typeof values1[2]==typeof values3[2]);
            return(a1 +"\t"+a2+"\t"+a3+"\n"+a4+"\t"+a5+"\t"+a6+"\n"+a7+"\t"+a8+"\t"+a9);
        }
            console.log (compareArray(values1,values2,values3));


        
        
        
        

