function area0fCountry(str , num){
    let cal_num = (num/148940000)*100//เอาเลขพื้นที่ของมันมาหาร148940000เเล้วคูณ100
    
    
    return  str + " is " +  cal_num.toFixed(2)  + " % of the total world's landmass"

}
console.log(area0fCountry("Russia" , 17098242));