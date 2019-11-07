inlets = 1;
outlets = 2;

var seqArray = new Array();

function list(){
    value = arguments
    seqArray.push(value[0], value[1], value[2]);
}



function bang() {
	outlet(0, "call remove_notes 0 0 400 127");
    outlet(0, "call set_notes");
    outlet(0, "call notes " + seqArray.length/3);

    for(var i=0; i < seqArray.length/3; i++){
        outlet(0, "call note " + seqArray[0+(i*3)] + " " + seqArray[1+(i*3)].toFixed(6) + " " + "0.25" + " " + seqArray[2+(i*3)]);
    }
    outlet(1, bang);
    outlet(1, seqArray.length/3);
}

function clear(){
    seqArray.length = 0;
}

