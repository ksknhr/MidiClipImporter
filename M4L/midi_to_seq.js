inlets = 1;
outlets = 2;

var seqArray = new Array();

function list(){
    value = arguments
    seqArray.push(value[0], value[1], value[2], value[3]);
}



function bang() {
	outlet(0, "call remove_notes 0 0 8 127");
    outlet(0, "call set_notes");
    outlet(0, "call notes " + seqArray.length/4);

    for(var i=0; i < seqArray.length/4; i++){
        outlet(0, "call note " + seqArray[1+(i*4)] + " " + seqArray[0+(i*4)].toFixed(6) + " " + seqArray[3+(i*4)] + " " + seqArray[2+(i*4)]);
    }
    outlet(1, bang);
}

function clear(){
    seqArray.length = 0;
}

