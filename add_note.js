autowatch = 1
inlets = 1
outlets = 1


function clear(){
    //clipApi.call("remove_notes_extended", 0, 127, 0, 8);

    noteOnArray.length = 0;
    noteOffArray.length = 0;
    pitchArray.length = 0;
}

var noteOnArray = new Array();
var noteOffArray = new Array();
var pitchArray = new Array();
var velocityArray = new Array();


function stockNotes(startTime, pitch, velocity){
    if(velocity >= 1){
        noteOnArray.push(startTime);
        pitchArray.push(pitch);
        velocityArray.push(velocity);
    } 
    if(velocity == 0){
        noteOffArray.push(startTime);
    }
}

function addNote(clipApi, startTime, pitch, velocity, duration){
    if (clipApi == null) throw("No clip")
    
    var note = {
        pitch: pitch, 
        start_time: startTime,
        duration: duration,
        velocity: velocity		
    }
    
    var notesArray = [note]
    var notesObject = { 
        notes: notesArray
    }
    var notesJson = JSON.stringify(notesObject)
        
    clipApi.call("add_new_notes", notesJson)
    
}


function writeNote(clipApi){
    for(i=0; i<noteOnArray.length; i++){
        var duration = noteOffArray[i] - noteOnArray[i];

        addNote(clipApi, noteOnArray[i], pitchArray[i], velocityArray[i],duration);
    }
}


function createMidiClip(track_id, clip_id){
    id_path = "live_set tracks " + track_id +  " clip_slots " + clip_id;
    var clipApi = new LiveAPI(id_path + " clip");

    writeNote(clipApi);

    outlet(0,"create done!");
}