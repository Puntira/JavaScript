function digitalClock(sec_num){
    
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours >= 24) {
        hours = 0 ;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return '"' + hours + ':' + minutes + ':' + seconds + '"';

}

console.log(digitalClock(5025));
console.log(digitalClock(61201));           
console.log(digitalClock(87000));