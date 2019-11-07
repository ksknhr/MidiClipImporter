inlets = 1;
outlets = 1;

var seqArray = new Array();

function list(){
	value = arguments
	seqArray.push(value[3]);
	
	var sum = seqArray.reduce(function (accumulator, currentValue, currentIndex, seqArray) {
    return accumulator + currentValue;});
	

    outlet(0, sum, value[0], value[1], value[2]);	
}

function clear(){
    seqArray.length = 0;
}
