function equation (str){
    let cal = str;
    let op = "";
    let e = "";
    let x = 0;
    for(var i = 0 ; i < str.length ; i++){
        if(cal[i] === "+")
        {
            op += '+';
        }
        else if(cal[i] === "-")
        {   
            op += "-";
        }
        else if(cal[i] === "*")
        {
            op += "*";
        }else
        {
            e += cal[i]
        }
    }
    let m = 0;
    m += parseInt(e[0]);
    for(i = 0 ; i < op.length ; i++){
        if(op[i] === "+"){
            m += parseInt(e[i+1])
        }
        else if(op[i] === "-"){
            m -= parseInt(e[i+1])
        }else if(op[i] === "*"){
            m *= parseInt(e[i+1])
        }
    } 
    return(m); 
}
console.log(equation("7*4-2"));
console.log(equation("6+5+4+3+2+1"));