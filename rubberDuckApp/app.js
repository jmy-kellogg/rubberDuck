//test case
var sayHi = function(){
	return "Hello"
}

var getSum = function(x, y){
	return x + y
}

var a = 3
var b = 4

var input = getSum(a, b)

var expected = 7

sameTypeOf(expected, input);
checkReturnIsExpected(expected, input);
//end test case



//linter


//function test
function sameTypeOf(expect, result){
	if(typeof expect === typeof result){
		return true
	}else{
		return "Your expected value is a " + typeof expect + " but your function returns a "+ typeof result
	}
}

function returnIsExpected(expect, result){ 
	
	var funcResult = func;
	
	if(expected === funcResult){
		return "It returned: "+ expect
	}else{
		return "It returned: "+ func+ " when you expeced: "+ expect
	} 
	
}
