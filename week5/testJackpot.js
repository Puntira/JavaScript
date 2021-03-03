function testJackpot(result) {
	var chek
	for(var i = 1 ; i < result.length ; i++){
		if(result[0] === result[i]) {
			chek = true
		}
		else {
			chek = false 
			break
		}
	}
	if(chek == true) return true
	else return false
}
console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["abc", "abc", "abc", "abc"]));
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
